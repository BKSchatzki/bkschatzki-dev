"use client";

import pageData from "@/data/pageData";

import { motion } from "framer-motion";

const Main = ({ page }: { page: string }) => {
  const thisPage = pageData.find((e) => e.page === page);

  return (
    <main className="mx-auto flex flex-col items-center justify-start text-center sm:text-xl">
      <section>
        <motion.h1
          className={`text-4xl font-bold sm:text-6xl ${thisPage?.styles?.textColor}`}
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { delay: 0.1 + 0.15 },
          }}
          exit={{ opacity: 0, y: 25, scale: 0.8 }}
        >
          {thisPage?.main?.heading}
        </motion.h1>
        <motion.p
          className="mt-6 text-balance sm:mt-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0 + 0.15 } }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          {thisPage?.main?.subheading}
        </motion.p>
      </section>
    </main>
  );
};

export default Main;
