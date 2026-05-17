# Diabetes Prediction System

A full-stack web application that predicts the likelihood of diabetes based on medical predictor variables. Built with a **Next.js** frontend and a **FastAPI** backend powering an Artificial Neural Network (ANN) model.

## 🚀 Features

- **Machine Learning**: Utilizes an Artificial Neural Network (ANN) built with Keras/TensorFlow to predict diabetes risk.
- **Interactive Frontend**: A modern, responsive user interface built with Next.js and styled for premium aesthetics.
- **FastAPI Backend**: High-performance RESTful API that handles data preprocessing, scaling, and model inference.
- **Full-Stack Integration**: Seamlessly connects the frontend and backend, with easy deployment configurations via Render.

## 📂 Project Structure

- `/frontend` - The Next.js application (React UI).
- `/backend` - The FastAPI application, including the trained Keras model and data scaler.
- `render.yaml` - Blueprint for automated full-stack deployment on Render.
- `ANN.ipynb` - The Jupyter Notebook used for exploratory data analysis, data preprocessing, and training the ANN model.
- `diabetes.csv` - The dataset used for training the model.

## 🛠️ Tech Stack

**Frontend:**
- [Next.js](https://nextjs.org/) (App Router)
- React
- Tailwind CSS (or standard CSS modules)

**Backend:**
- [FastAPI](https://fastapi.tiangolo.com/)
- Python
- TensorFlow / Keras (ANN Model)
- Scikit-learn (Data Scaling)
- Pandas & NumPy

## 💻 Local Development

### Prerequisites
- Node.js (v18+)
- Python (v3.8+)

### 1. Setup the Backend

```bash
cd backend
# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the FastAPI server
uvicorn main:app --reload
```
The API will be running at `http://localhost:8000`.

### 2. Setup the Frontend

```bash
cd frontend

# Install dependencies
npm install

# Run the development server
npm run dev
```
The frontend will be running at `http://localhost:3000`.

## ☁️ Deployment

This project includes a `render.yaml` file for easy deployment on [Render](https://render.com). 

1. Push this repository to GitHub.
2. Go to your Render Dashboard.
3. Create a new **Blueprint**.
4. Connect the repository, and Render will automatically provision both the frontend and backend services.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
