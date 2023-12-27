"use client";

import pageData from "@/data/pageData";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const Randomizer = ({ page }: { page: String }) => {
  const thisPage = pageData.find((e) => e.page === page);
  const thisRandomizer = thisPage?.sections?.find(
    (e) => e.type === "randomizer",
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastTwoIndexes, setLastTwoIndexes] = useState([0, 0]);
  const [selectedItem, setSelectedItem] = useState(thisRandomizer?.items[0]);

  const ref = useRef(null);
  const isInView = useInView(ref);

  const handleClick = () => {
    let newIndex;
    do {
      newIndex = Math.floor(
        Math.random() * (thisRandomizer?.items.length ?? 0),
      );
    } while (
      [currentIndex, ...lastTwoIndexes].includes(newIndex) ||
      newIndex === 0
    );
    setCurrentIndex(newIndex);
    setLastTwoIndexes([currentIndex, lastTwoIndexes[0]]);
    setSelectedItem(thisRandomizer?.items[newIndex]);
  };

  return (
    <motion.article
      className="mt-6 h-56 w-full rounded-md text-center sm:mt-10 sm:h-64"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.1 + 0.15 } }}
      exit={{ opacity: 0 }}
    >
      <AnimatePresence mode="popLayout">
        <motion.section
          key={selectedItem?.heading}
          className={`flex h-full flex-col items-center justify-center gap-1.5 rounded-md px-6 py-3 sm:gap-3 ${thisPage?.styles?.bgColorSection}`}
          initial={{ opacity: 0, y: -25, scale: 0.8 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { delay: 0.1 + 0.15 },
          }}
          exit={{
            opacity: 0,
            y: -25,
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
      <motion.button
        onClick={handleClick}
        ref={ref}
        className={`mt-6 rounded-md px-4 py-2 text-xl font-bold text-black sm:mt-10 sm:px-6 sm:py-3 sm:text-3xl ${thisPage?.styles?.bgColorAccent}`}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isInView ? 1 : 0,
          transition: { delay: 0.2 + 0.15 },
        }}
        exit={{ opacity: 0 }}
      >
        Random Fact
      </motion.button>
    </motion.article>
  );
};

export default Randomizer;
