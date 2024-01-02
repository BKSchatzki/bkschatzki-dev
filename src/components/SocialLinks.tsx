import externalLinks from "../data/externalLinks";

import Copyright from "./Copyright";

import { motion } from "framer-motion";

const SocialLinks = () => {
  const socials = externalLinks.find((e) => e.type === "socials");

  return (
    <div className="flex h-16 w-full flex-col items-center justify-center gap-2 sm:h-24 sm:gap-3">
      <ul className="flex gap-4 sm:gap-6">
        {socials?.links.map((link, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.1 }}
            transition={{ delay: 0.5 + 0.05 * index }}
          >
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
          </motion.li>
        ))}
      </ul>
      <Copyright />
    </div>
  );
};

export default SocialLinks;
