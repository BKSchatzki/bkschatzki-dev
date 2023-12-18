"use client";

import NavLinks from "./NavLinks";
import { Menu, X } from "lucide-react";

import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const isTwSm = useMediaQuery({ query: "(min-width: 640px)" });

  return (
    <header className="fixed h-16 sm:h-24">
      <nav
        className={`fixed flex w-full flex-col items-end justify-start ${
          isMenuOpen ? "h-full" : "h-16 sm:h-24"
        }`}
      >
        <label className="swap swap-flip fixed right-4 top-4 z-10 sm:right-6 sm:top-6">
          <input
            type="checkbox"
            onChange={() => setIsMenuOpen(!isMenuOpen)}
            checked={isMenuOpen}
          />
          <Menu className="swap-off" size={isTwSm ? 48 : 32} />
          <X className="swap-on" size={isTwSm ? 48 : 32} />
        </label>
        {isMenuOpen && <NavLinks closeMenu={closeMenu} />}
      </nav>
    </header>
  );
};

export default Header;
