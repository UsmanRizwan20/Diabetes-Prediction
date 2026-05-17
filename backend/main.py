from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import numpy as np
import pandas as pd
import joblib
import tensorflow as tf
import os

app = FastAPI(title="Diabetes Prediction API", version="1.0")

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust in production (e.g., ["http://localhost:3000"])
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Global variables for model and scaler
model = None
scaler = None

# Paths to models
MODEL_PATH = os.path.join(os.path.dirname(__file__), "models", "diabetes_ann_model.keras")
SCALER_PATH = os.path.join(os.path.dirname(__file__), "models", "scaler.pkl")

# Load models on startup
@app.on_event("startup")
async def load_models():
    global model, scaler
    try:
        if os.path.exists(MODEL_PATH) and os.path.exists(SCALER_PATH):
            model = tf.keras.models.load_model(MODEL_PATH)
            scaler = joblib.load(SCALER_PATH)
            print("Models loaded successfully.")
        else:
            print(f"Warning: Models not found at {MODEL_PATH} or {SCALER_PATH}. Please ensure they are placed there.")
    except Exception as e:
        print(f"Error loading models: {str(e)}")

# Define input data schema
class PatientData(BaseModel):
    Pregnancies: float
    Glucose: float
    BloodPressure: float
    SkinThickness: float
    Insulin: float
    BMI: float
    DiabetesPedigreeFunction: float
    Age: float

@app.post("/predict")
async def predict_diabetes(data: PatientData):
    if model is None or scaler is None:
        raise HTTPException(status_code=503, detail="Models are not loaded. Please ensure scaler.pkl and diabetes_ann_model.keras are in the backend/models directory.")

    try:
        # Create input array matching exact feature order from notebook
        input_data = np.array([[
            data.Pregnancies,
            data.Glucose,
            data.BloodPressure,
            data.SkinThickness,
            data.Insulin,
            data.BMI,
            data.DiabetesPedigreeFunction,
            data.Age
        ]])

        # Preprocess using the loaded scaler
        scaled_data = scaler.transform(input_data)

        # Make prediction
        prediction_prob = float(model.predict(scaled_data, verbose=0)[0][0])
        
        # 0.5 threshold
        is_diabetic = prediction_prob > 0.5

        # Calculate confidence
        confidence = prediction_prob if is_diabetic else (1.0 - prediction_prob)

        return {
            "probability": prediction_prob,
            "prediction_class": 1 if is_diabetic else 0,
            "confidence": confidence,
            "message": "Diabetes Detected" if is_diabetic else "No Diabetes Detected"
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error during prediction: {str(e)}")

@app.get("/")
def read_root():
    return {"message": "Welcome to the Diabetes Prediction API. Models status: " + ("Loaded" if model else "Not Loaded")}
