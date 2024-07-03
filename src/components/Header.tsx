import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
} from 'lucide-react';

import NavLinks from './NavLinks';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);

  const closeMenu = () => {
    setIsMenuClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsMenuClosing(false);
    }, 250);
  };

  return (
    <header className="fixed z-10 h-16 w-full bg-gradient-to-b from-black to-transparent sm:h-24 sm:from-90% sm:to-100%">
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
        <AnimatePresence mode="wait">
          {isMenuOpen && !isMenuClosing && (
            <NavLinks
              closeMenu={closeMenu}
              navType="drawerMenu"
              isMenuOpen={isMenuOpen}
            />
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
