"use client";

import pageData from "@/data/pageData";

import { motion, AnimatePresence } from "framer-motion";

const Main = ({ page }: { page: string }) => {
  const thisPage = pageData.find((e) => e.page === page);

  return (
    <main className="mx-auto flex flex-col items-center justify-start text-center sm:text-xl">
      <section>
        <AnimatePresence>
          <motion.h1
            className={`text-4xl font-bold sm:text-6xl ${thisPage?.styles?.textColor}`}
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.8,
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.8 }}
            transition={{ delay: 0.1 }}
          >
            {thisPage?.main?.heading}
          </motion.h1>
        </AnimatePresence>
        <motion.p
          className="pt-6 sm:pt-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ delay: 0 }}
        >
          {thisPage?.main?.subheading}
        </motion.p>
      </section>
    </main>
  );
};

export default Main;
