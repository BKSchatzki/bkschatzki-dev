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
    trigger: 'Links to Stuff',
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
];

const Directory = () => {
  return (
    <section id="directory">
      <Card className="bg-secondary/50 shadow-lg">
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
