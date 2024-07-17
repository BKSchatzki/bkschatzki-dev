import * as React from 'react';

import {
  H2,
  Large,
  Lead,
  P,
} from '@/components/typography';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  [key: string]: any;
}

const text = [
  'Pretentious sentences I use for LinkedIn clout:',
  'I break things until they work.',
  'I overengineer stuff until stuff is simple.',
  "I know what I'm doing because I don't know what I'm doing.",
  "Wow, aren't I just so clever.",
];

const PretentiousSentences = React.forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(className)}
        {...props}
      >
        <H2 className="header-space:px-6 border-0">I am so cool.</H2>
        <Card className="bg-secondary/50">
          <CardHeader>
            <CardTitle>
              <Large className="underline decoration-primary decoration-[0.3333rem] underline-offset-4">
                {text[0]}
              </Large>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {text.slice(1, -1).map((textItem, index) => (
              <P key={index}>
                <Lead>{textItem}</Lead>
              </P>
            ))}
            <P>{text[text.length - 1]}</P>
          </CardContent>
        </Card>
      </section>
    );
  }
);
PretentiousSentences.displayName = 'Introduction';

export default PretentiousSentences;
