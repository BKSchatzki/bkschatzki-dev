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
  'JavaScript',
  'HTML',
  'CSS',
  'Node.js',
  'Express',
  'React',
  'SQL',
  'MongoDB',
  'TypeScript',
  'Git & Version Control',
  'REST API',
  'GraphQL',
  'Next.js',
  'Prisma',
  'Mongoose',
  'Jest',
  'Jira',
  'Figma',
  'Bootstrap',
  'Material UI',
  'Tailwind CSS',
  'OOP',
  'Agile',
  'Accessibility',
  'Docker',
  'Cloud Platforms',
];

const Skills = React.forwardRef<HTMLDivElement, Props>(({ className, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn(className)}
      {...props}
    >
      <H2 className="header-space:px-6 border-0">Some skills and stuff.</H2>
      <Card className="bg-secondary/50">
        <CardHeader>
          <CardTitle>
            <Large className="underline decoration-primary decoration-[0.3333rem] underline-offset-8">
              A non-exhaustive list lazily copied from my resume:
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
