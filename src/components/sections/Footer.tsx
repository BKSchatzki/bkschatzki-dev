import React from 'react';

import {
  Muted,
  Small,
} from '../typography';

const Footer = () => {
  return <Muted className="text-center inline-block">&copy; {new Date().getFullYear()} Brendan K. Schatzki</Muted>;
};

export default Footer;
