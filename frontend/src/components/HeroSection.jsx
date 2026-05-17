"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden pt-16 pb-12">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            Powered by Keras Deep Learning
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 tracking-tight mb-6">
            Predictive Diabetes <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Risk Assessment
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10">
            Leveraging state-of-the-art Artificial Neural Networks to analyze patient metrics and predict diabetes onset with high accuracy. Enter patient parameters below for instant inference.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
