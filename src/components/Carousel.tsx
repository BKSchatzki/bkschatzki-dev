"use client";

import pageData from "../data/pageData";

import { motion } from "framer-motion";

const Carousel = ({ page }: { page: String }) => {
  const thisPage = pageData.find((e) => e.page === page);
  const thisCarousel = thisPage?.sections?.find((e) => e.type === "carousel");

  return (
    <motion.article
      className="carousel carousel-vertical mt-6 h-48 w-full space-y-3 rounded-md sm:mt-10 sm:h-96 sm:space-y-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.1 + 0.15 } }}
      exit={{ opacity: 0 }}
    >
      {thisCarousel?.items.map((item, index) => (
        <motion.section
          key={index}
          className={`carousel-item h-[67.666667%] flex-col items-center justify-center gap-1.5 rounded-md px-6 py-3 sm:gap-3 ${thisPage?.styles?.bgColorSectionGradient}`}
          initial={{ opacity: 0, y: -25, scale: 0.1 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { delay: 0.1 + 0.15 + 0.1 * index },
          }}
          exit={{ opacity: 0, y: -25, scale: 0.1 }}
        >
          <h3 className="text-2xl font-semibold text-neutral-50 sm:text-4xl">
            {item.heading}
          </h3>
          <p className="text-center sm:text-xl">{item.subheading}</p>
        </motion.section>
      ))}
    </motion.article>
  );
};

export default Carousel;
