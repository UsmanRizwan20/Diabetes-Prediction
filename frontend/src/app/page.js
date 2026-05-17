"use client";

import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import InputField from "@/components/InputField";
import PredictionCard from "@/components/PredictionCard";
import Loader from "@/components/Loader";

export default function Home() {
  const [formData, setFormData] = useState({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);

    // Convert string inputs to floats
    const payload = {
      Pregnancies: parseFloat(formData.Pregnancies),
      Glucose: parseFloat(formData.Glucose),
      BloodPressure: parseFloat(formData.BloodPressure),
      SkinThickness: parseFloat(formData.SkinThickness),
      Insulin: parseFloat(formData.Insulin),
      BMI: parseFloat(formData.BMI),
      DiabetesPedigreeFunction: parseFloat(formData.DiabetesPedigreeFunction),
      Age: parseFloat(formData.Age),
    };

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await axios.post(`${apiUrl}/predict`, payload);
      setResult(response.data);
    } catch (err) {
      setError(
        err.response?.data?.detail || "Failed to connect to the prediction API."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <HeroSection />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card-bg border border-card-border rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-sm"
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground">Patient Metrics</h2>
            <p className="text-gray-400 mt-1">
              Please fill out all the following fields accurately for the best prediction results.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Pregnancies (count)"
                name="Pregnancies"
                value={formData.Pregnancies}
                onChange={handleChange}
                placeholder="e.g. 2"
                min="0"
                step="1"
              />
              <InputField
                label="Glucose (mg/dL)"
                name="Glucose"
                value={formData.Glucose}
                onChange={handleChange}
                placeholder="e.g. 120"
                min="0"
                step="0.1"
              />
              <InputField
                label="Blood Pressure (mm Hg)"
                name="BloodPressure"
                value={formData.BloodPressure}
                onChange={handleChange}
                placeholder="e.g. 70"
                min="0"
                step="0.1"
              />
              <InputField
                label="Skin Thickness (mm)"
                name="SkinThickness"
                value={formData.SkinThickness}
                onChange={handleChange}
                placeholder="e.g. 20"
                min="0"
                step="0.1"
              />
              <InputField
                label="Insulin (mu U/ml)"
                name="Insulin"
                value={formData.Insulin}
                onChange={handleChange}
                placeholder="e.g. 80"
                min="0"
                step="0.1"
              />
              <InputField
                label="BMI (weight in kg/(height in m)^2)"
                name="BMI"
                value={formData.BMI}
                onChange={handleChange}
                placeholder="e.g. 25.5"
                min="0"
                step="0.1"
              />
              <InputField
                label="Diabetes Pedigree Function"
                name="DiabetesPedigreeFunction"
                value={formData.DiabetesPedigreeFunction}
                onChange={handleChange}
                placeholder="e.g. 0.5"
                min="0"
                step="0.001"
              />
              <InputField
                label="Age (years)"
                name="Age"
                value={formData.Age}
                onChange={handleChange}
                placeholder="e.g. 35"
                min="1"
                step="1"
              />
            </div>

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500 text-sm">
                {error}
              </div>
            )}

            <div className="flex justify-end pt-4 border-t border-card-border">
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-xl shadow-lg shadow-primary/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
              >
                {loading ? "Processing..." : "Run Assessment"}
              </button>
            </div>
          </form>
        </motion.div>

        {loading && <Loader />}
        
        {!loading && <PredictionCard result={result} />}
      </main>
    </div>
  );
}
