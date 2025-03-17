import * as React from 'react';

import {
  H2,
  Large,
  Lead,
  LI,
  UL,
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

const skills = [
  'React',
  'Node',
  'TypeScript',
  'JavaScript',
  'Next.js',
  'PostgreSQL',
  'MongoDB',
  'Express',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'Git',
  'OpenAI',
  'Jest',
  'Reat Testing Library',
];

const Skills = React.forwardRef<HTMLDivElement, Props>(({ className, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn(className)}
      {...props}
    >
      <Card className="bg-secondary/50">
        <CardHeader>
          <CardTitle>
            <Large className="underline decoration-primary decoration-[0.1667rem] underline-offset-8">
              My Skills (some of them, anyway)
            </Large>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <UL className="m-0 flex flex-wrap gap-4">
            {skills.map((s) => (
              <LI
                key={s}
                className="list-none"
              >
                <Lead>{s}</Lead>
              </LI>
            ))}
          </UL>
        </CardContent>
      </Card>
    </section>
  );
});
Skills.displayName = 'Skills';

export default Skills;
