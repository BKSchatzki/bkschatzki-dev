"use client";

import pageData from "@/data/pageData";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Randomizer = ({ page }: { page: String }) => {
  const thisPage = pageData.find((e) => e.page === page);
  const thisRandomizer = thisPage?.sections?.find(
    (e) => e.type === "randomizer",
  );

  const [selectedItem, setSelectedItem] = useState(thisRandomizer?.items[0]);

  const handleClick = () => {
    const randomIndex = Math.floor(
      Math.random() * (thisRandomizer?.items.length ?? 0),
    );
    setSelectedItem(thisRandomizer?.items[randomIndex]);
  };

  return (
    <motion.article
      className="relative mt-6 h-36 w-full rounded-md text-center sm:mt-10 sm:h-48"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.1 + 0.15 } }}
      exit={{ opacity: 0 }}
    >
      <AnimatePresence mode="popLayout">
        <motion.section
          key={selectedItem?.heading}
          className={`flex h-full flex-col items-center justify-center gap-1.5 rounded-md px-6 py-3 before:absolute before:-left-4 before:top-0 before:h-full before:w-36 before:bg-gradient-to-l before:from-transparent before:from-5% before:to-black before:to-90% after:absolute after:-right-4 after:top-0 after:h-full after:w-36 after:bg-gradient-to-r after:from-transparent after:from-5% after:to-black after:to-90% sm:gap-3 ${thisPage?.styles?.bgColorSection}`}
          initial={{ opacity: 0, x: -250, scale: 0.8 }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { delay: 0.1 + 0.15 },
          }}
          exit={{
            opacity: 0,
            x: 500,
            scale: 0.8,
            transition: { ease: "anticipate" },
          }}
        >
          <h3 className="text-2xl font-semibold text-neutral-50 sm:text-4xl">
            {selectedItem?.heading}
          </h3>
          <p className="text-balance sm:text-xl">{selectedItem?.subheading}</p>
        </motion.section>
      </AnimatePresence>
      <button
        onClick={handleClick}
        className={`mt-6 rounded-md px-4 py-2 text-xl font-bold text-black sm:mt-10 sm:px-6 sm:py-3 sm:text-3xl ${thisPage?.styles?.bgColorAccent}`}
      >
        Random Fact
      </button>
    </motion.article>
  );
};

export default Randomizer;
