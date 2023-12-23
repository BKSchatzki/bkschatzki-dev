"use client";

import pageData from "@/data/pageData";
import techIcons from "@/data/techIcons";

import Image from "next/image";

import { motion } from "framer-motion";

const IconSpread = ({ page }: { page: string }) => {
  const thisPage = pageData.find((e) => e.page === page);

  return (
    <motion.ul
      className={`mt-6 grid w-full grid-cols-12 items-center justify-center gap-3 rounded-md p-3 sm:gap-6 sm:p-6 ${thisPage?.styles?.bgColorBase}`}
      initial={{ opacity: 0, y: -25, scale: 0.8 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { delay: 0.1 + 0.15 },
      }}
      exit={{ opacity: 0, y: -25, scale: 0.8 }}
    >
      {techIcons.map((icon, index) => (
        <motion.li
          key={index}
          className="col-span-2 flex items-center justify-center"
          initial={{ opacity: 0, y: -25, scale: 0.1 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { delay: 0.1 + 0.15 + 0.0125 * index },
          }}
          exit={{ opacity: 0, y: -25, scale: 0.1 }}
        >
          <a href={icon.href} target="_blank" rel="noopener noreferrer">
            <Image
              src={icon.src}
              alt={icon.alt}
              className="h-8 w-8 sm:h-12 sm:w-12"
            />
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default IconSpread;
