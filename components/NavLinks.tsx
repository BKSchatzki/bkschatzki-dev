"use client";

import pageData from "@/data/pageData";

import Link from "next/link";

import { motion } from "framer-motion";

import { MouseEventHandler } from "react";

const NavLinks = ({
  closeMenu,
  navType,
  isMenuOpen,
}: {
  closeMenu: MouseEventHandler<HTMLDivElement>;
  navType: string;
  isMenuOpen: boolean;
}) => {
  return (
    <>
      {navType === "drawerMenu" && isMenuOpen && (
        <motion.ul
          key="backdrop"
          className="fixed flex min-h-screen w-screen flex-col items-center justify-center gap-6 bg-black bg-opacity-80 bg-clip-padding text-center backdrop-blur-md backdrop-filter sm:gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0 }}
        >
          {pageData.map((page, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -250, scale: 0.1 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 250, scale: 0.1 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link href={page.navLink?.href || "/"} className="">
                <div onClick={closeMenu} className="flex flex-col">
                  <span
                    className={`text-2xl font-bold sm:text-4xl ${page.styles?.textColor}`}
                  >
                    {page.navLink?.name}
                  </span>
                  <span className="sm:text-xl">
                    {page.navLink?.description}
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
      {navType === "iconRow" && !isMenuOpen && (
        <ul className="flex flex-row items-center justify-center gap-8 sm:gap-12">
          {pageData.map((page, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: -50, scale: 0.1 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.1 }}
              transition={{ delay: 0.3 + 0.1 * index }}
            >
              <Link href={page.navLink?.href || "/"} className="">
                <span className={page.styles?.textColor}>{page.icon}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      )}
    </>
  );
};

export default NavLinks;
