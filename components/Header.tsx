"use client";

import NavLinks from "./NavLinks";
import { Menu } from "lucide-react";

import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full">
      <nav className="mx-auto my-4 h-16 w-11/12">
        <button className="ms-auto" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu />
        </button>
        {isMenuOpen && <NavLinks />}
      </nav>
    </header>
  );
};

export default Header;
