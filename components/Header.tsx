"use client";

import NavLinks from "./NavLinks";
import { Menu } from "lucide-react";

import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed h-16">
      <nav
        className={`fixed flex w-full flex-col items-end justify-start ${
          isMenuOpen ? "h-full" : "h-16"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="fixed right-4 top-4 z-10"
        >
          <Menu size={32} />
        </button>
        {isMenuOpen && <NavLinks />}
      </nav>
    </header>
  );
};

export default Header;
