"use client";

import NavLinks from "./NavLinks";
import { Menu, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="fixed h-16 sm:h-24">
      <nav className="fixed flex h-16 w-full flex-col items-end justify-start sm:h-24">
        <NavLinks closeMenu={() => {}} />
      </nav>
    </footer>
  );
};

export default Footer;
