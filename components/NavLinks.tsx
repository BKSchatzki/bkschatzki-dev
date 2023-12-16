import pageData from "@/data/pageData";

import Link from "next/link";

import { MouseEventHandler } from "react";

const NavLinks = ({
  closeMenu,
}: {
  closeMenu: MouseEventHandler<HTMLDivElement>;
}) => {
  // Change the type of closeMenu
  return (
    <ul className="fixed flex min-h-screen w-screen flex-col items-center justify-center gap-6 bg-black bg-opacity-80 bg-clip-padding py-6 text-center backdrop-blur-md backdrop-filter">
      {pageData.map((page, index) => (
        <li key={index}>
          <Link href={page.navLink.href} className="">
            <div onClick={closeMenu} className="m-1 flex flex-col">
              <span
                className={`text-2xl font-bold ${page.styleClasses.textColor}`}
              >
                {page.navLink.name}
              </span>
              <span className="text-neutral-300">
                {page.navLink.description}
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
