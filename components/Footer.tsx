"use client";

import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 flex h-16 w-full flex-col items-center justify-center gap-2 bg-gradient-to-t from-black from-5% to-transparent to-95% sm:h-24 sm:gap-3">
      <SocialLinks />
      <span className="text-xs sm:text-base">
        &copy; 2024 Brendan K. Schatzki
      </span>
    </footer>
  );
};

export default Footer;
