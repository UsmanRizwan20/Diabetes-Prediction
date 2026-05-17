"use client";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function PredictionCard({ result }) {
  if (!result) return null;

  const isDiabetesDetected = result.probability > 0.5;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={`mt-8 p-6 rounded-2xl border ${
        isDiabetesDetected
          ? "bg-red-500/10 border-red-500/30"
          : "bg-emerald-500/10 border-emerald-500/30"
      }`}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div
            className={`p-3 rounded-full ${
              isDiabetesDetected ? "bg-red-500/20" : "bg-emerald-500/20"
            }`}
          >
            {isDiabetesDetected ? (
              <AlertCircle className="w-8 h-8 text-red-500" />
            ) : (
              <CheckCircle2 className="w-8 h-8 text-emerald-500" />
            )}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground">
              {isDiabetesDetected ? "Diabetes Detected" : "No Diabetes Detected"}
            </h3>
            <p className="text-gray-400 mt-1">
              Based on the provided medical metrics.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="bg-background rounded-lg p-4 border border-card-border text-center min-w-[120px]">
            <p className="text-sm text-gray-400 mb-1">Probability</p>
            <p className="text-2xl font-bold text-primary">
              {(result.probability * 100).toFixed(1)}%
            </p>
          </div>
          <div className="bg-background rounded-lg p-4 border border-card-border text-center min-w-[120px]">
            <p className="text-sm text-gray-400 mb-1">Confidence</p>
            <p className="text-2xl font-bold text-secondary">
              {(result.confidence * 100).toFixed(1)}%
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
