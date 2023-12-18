"use client";

import NavLinks from "./NavLinks";
import { Menu, X } from "lucide-react";

import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
          <Menu className="swap-off block sm:hidden" size={32} />
          <X className="swap-on block sm:hidden" size={32} />
          <Menu className="swap-off hidden sm:block" size={48} />
          <X className="swap-on hidden sm:block" size={48} />
        </label>
        {isMenuOpen && <NavLinks closeMenu={closeMenu} />}
      </nav>
    </header>
  );
};

export default Header;
