import { motion } from "framer-motion";

const Copyright = () => {
  return (
    <motion.span
      className="text-xs sm:text-base"
      initial={{ opacity: 0, y: 25, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 25, scale: 0.8 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      &copy; 2024 Brendan K. Schatzki
    </motion.span>
  );
};

export default Copyright;
