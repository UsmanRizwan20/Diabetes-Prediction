import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full"
      />
      <p className="text-primary mt-4 font-medium animate-pulse">
        Analyzing patient data...
      </p>
    </div>
  );
}
