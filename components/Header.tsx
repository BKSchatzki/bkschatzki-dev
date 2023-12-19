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
    <header className="fixed h-16 w-full bg-gradient-to-b from-black from-5% to-transparent to-95% sm:h-24">
      <nav
        className={`relative flex flex-col items-center justify-center ${
          isMenuOpen ? "h-screen" : "h-full"
        }`}
      >
        <div className="hidden sm:block">
          <NavLinks
            closeMenu={() => {}}
            navType="iconRow"
            isMenuOpen={isMenuOpen}
          />
        </div>
        <label className="swap swap-flip absolute right-4 top-4 z-10 sm:right-6 sm:top-6">
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
        {isMenuOpen && (
          <NavLinks
            closeMenu={closeMenu}
            navType="drawerMenu"
            isMenuOpen={isMenuOpen}
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
