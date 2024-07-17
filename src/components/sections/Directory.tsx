import React from 'react';

import { stuff } from '@/app/content/stuff';
import {
  Anchor,
  H2,
  Large,
  LI,
  P,
  UL,
} from '@/components/typography';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { Badge } from '../ui/badge';
import { Card } from '../ui/card';

const items = [
  {
    trigger: 'Links to my cool stuff:',
    content: (
      <UL className="m-0 flex flex-wrap gap-4">
        {stuff.map((item) => (
          <LI
            key={item.id}
            className="list-none"
          >
            <Anchor
              href={`#${item.id}`}
              className="hover:brightness-100"
            >
              <Badge
                variant="outline"
                className="px-4 py-1 text-sm hover:bg-primary hover:text-background"
              >
                {item.linkText}
              </Badge>
            </Anchor>
          </LI>
        ))}
      </UL>
    ),
  },
  {
    trigger: 'What happened to your old fancy portfolio?',
    content: (
      <P className="leading-1">
        The old site was rigid. It functioned only as a showcase page that I would send potential
        clients and employers and served no other purpose. I wanted a site that could also be a
        microblog.
      </P>
    ),
  },
];

const Directory = () => {
  return (
    <section id="directory">
      <H2 className="border-0 header-space:px-6">Directory and FAQ.</H2>
      <Card>
        <Accordion
          type="single"
          defaultValue="item-0"
          collapsible
          className="px-6"
        >
          {items.map((item, index) => (
            <AccordionItem
              key={item.trigger}
              value={`item-${index}`}
              className={index === items.length - 1 ? 'border-0' : ''}
            >
              <AccordionTrigger className="text-start text-primary hover:no-underline hover:brightness-200">
                <Large className="pe-6">{item.trigger}</Large>
              </AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </section>
  );
};

export default Directory;
