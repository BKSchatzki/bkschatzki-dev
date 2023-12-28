"use client";

import SocialLinks from "./SocialLinks";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 flex h-16 w-full flex-col items-center justify-center gap-2 bg-gradient-to-t from-black from-5% to-transparent to-95% sm:h-24 sm:gap-3">
      <SocialLinks />
      <motion.span
        className="text-xs sm:text-base"
        initial={{ opacity: 0, y: 25, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 25, scale: 0.8 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        &copy; 2024 Brendan K. Schatzki
      </motion.span>
    </footer>
  );
};

export default Footer;
