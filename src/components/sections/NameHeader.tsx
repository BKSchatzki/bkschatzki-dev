/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

import { H1 } from '@/components/typography';

import { Card } from '../ui/card';

interface Props {
  className?: string;
  [key: string]: any;
}

const NameHeader = React.forwardRef<HTMLHeadingElement, Props>(({ className, ...props }, ref) => {
  return (
    <Card className="py-6 text-balance shadow-lg">
      <H1
        ref={ref}
        className="scroll-m-20 px-6 text-3xl font-bold tracking-tighter header-space:px-6 underline decoration-primary underline-offset-4 decoration-[0.3333rem]"
      >
        Brendan K. Schatzki
        <br />
        <span className="inline-block pt-3 text-2xl tracking-normal">
          Full Stack Software Development Engineer
          <br />
          <span className="inline-block pt-3 text-xl font-normal tracking-normal">// React, Node, TypeScript, JavaScript, Next.js, PostgreSQL</span>
        </span>
      </H1>
    </Card>
  );
});
NameHeader.displayName = 'NameHeader';

export default NameHeader;
