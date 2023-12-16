"use client";

import NavLinks from "./NavLinks";
import { Menu } from "lucide-react";

import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="">
      <nav className="fixed flex h-16 w-full flex-col items-end justify-start">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="fixed right-4 top-4 z-10"
        >
          <Menu />
        </button>
        {isMenuOpen && <NavLinks />}
      </nav>
    </header>
  );
};

export default Header;
