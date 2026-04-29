import { motion } from "framer-motion";

export default function Intro() {
  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <motion.h1
        className="text-4xl text-blue-400"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        Kavir Sawant
      </motion.h1>
    </motion.div>
  );
}