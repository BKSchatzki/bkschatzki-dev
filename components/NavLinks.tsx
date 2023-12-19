import pageData from "@/data/pageData";

import Link from "next/link";

import { MouseEventHandler } from "react";

const NavLinks = ({
  closeMenu,
  navType,
}: {
  closeMenu: MouseEventHandler<HTMLDivElement>;
  navType: string;
}) => {
  return (
    <>
      {navType === "drawerMenu" && (
        <ul className="fixed flex min-h-screen w-screen flex-col items-center justify-center gap-6 bg-black bg-opacity-80 bg-clip-padding text-center backdrop-blur-md backdrop-filter sm:gap-10">
          {pageData.map((page, index) => (
            <li key={index}>
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
            </li>
          ))}
        </ul>
      )}
      {navType === "iconRow" && (
        <ul className="flex flex-row items-center justify-center gap-8 sm:gap-12">
          {pageData.map((page, index) => (
            <li key={index}>
              <Link href={page.navLink?.href || "/"} className="">
                <span className={page.styles?.textColor}>{page.icon}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default NavLinks;
