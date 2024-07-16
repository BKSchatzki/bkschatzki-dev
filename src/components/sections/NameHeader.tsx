import React from 'react';

import { H1 } from '../typography';

interface Props {
  className?: string;
  [key: string]: any;
}

const NameHeader = React.forwardRef<HTMLHeadingElement, Props>(({ className, ...props }, ref) => {
  return (
    <H1
      ref={ref}
      className="header-space:px-6"
    >
      Brendan K. Schatzki
      <br />
      Software Engineer
    </H1>
  );
});
NameHeader.displayName = 'NameHeader';

export default NameHeader;
