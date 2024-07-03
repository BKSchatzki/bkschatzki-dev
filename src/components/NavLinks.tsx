import { MouseEventHandler } from 'react';

import { motion } from 'framer-motion';
import {
  Link,
  useLocation,
} from 'react-router-dom';

import pageData from '../data/pageData';
import SocialLinks from './SocialLinks';

const NavLinks = ({
  closeMenu,
  navType,
  isMenuOpen,
}: {
  closeMenu: MouseEventHandler<HTMLDivElement>;
  navType: string;
  isMenuOpen: boolean;
}) => {
  const location = useLocation();

  return (
    <>
      {navType === "drawerMenu" && isMenuOpen && (
        <motion.ul
          key="backdrop"
          className="fixed top-0 flex min-h-[100dvh] w-screen flex-col items-center justify-center gap-6 bg-black bg-opacity-80 bg-clip-padding text-center backdrop-blur-md backdrop-filter sm:gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.25 } }}
        >
          {pageData.map((page, index) => (
            <motion.li
              key={page.page}
              initial={{ opacity: 0, x: -250, scale: 0.1 }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
                transition: { delay: 0.1 * index },
              }}
              exit={{
                opacity: 0,
                x: 500,
                scale: 0.1,
                transition: { delay: 0.05 * index, ease: "anticipate" },
              }}
            >
              <Link to={page.navLink?.href || "/"}>
                <div onClick={closeMenu} className="relative flex flex-col">
                  <span
                    className={`text-2xl font-bold sm:text-4xl ${page.styles?.textColor}`}
                  >
                    {page.navLink?.name}
                  </span>
                  {location.pathname === page.navLink?.href && (
                    <div
                      className={`absolute top-[57%] h-[3px] w-full sm:top-[61%] ${page.styles?.bgColorAccent}`}
                    />
                  )}
                  <span className="sm:text-xl">
                    {page.navLink?.description}
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
          <SocialLinks />
        </motion.ul>
      )}
      {navType === "iconRow" && !isMenuOpen && (
        <ul className="flex flex-row items-center justify-center gap-8 sm:gap-12">
          {pageData.map((page, index) => (
            <motion.li
              key={page.page}
              initial={{ opacity: 0, y: -50, scale: 0.1 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.1 }}
              transition={{ delay: 0.3 + 0.1 * index }}
            >
              <Link to={page.navLink?.href || "/"} className={"relative"}>
                <span className={page.styles?.textColor}>{page.icon}</span>
                {location.pathname === page.navLink?.href && (
                  <motion.div
                    layoutId="iconRowUnderline"
                    className={`absolute left-[-25%] top-[110%] h-[3px] w-[150%] ${page.styles?.bgColorAccent}`}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      )}
    </>
  );
};

export default NavLinks;
