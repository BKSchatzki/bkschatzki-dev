import * as React from 'react';

import Image from 'next/image';

import { stuff } from '@/app/content/stuff';
import {
  Anchor,
  H2,
  Large,
} from '@/components/typography';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { IFrame } from '@/components/ui/iframe';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';

interface Props {
  className?: string;
  [key: string]: any;
}

const CoolStuff = React.forwardRef<HTMLDivElement, Props>(({ className, ...props }, ref) => {
  return (
    <section>
      <H2 className="border-0 header-space:px-6">Stuff you might think is cool.</H2>
      <div className="flex flex-col items-center justify-center gap-5">
        {stuff.map(({ id, title, media1, media2, text1, text2 }, i) => (
          <article
            key={title}
            id={id}
          >
            <Card>
              <CardHeader>
                <CardTitle>
                  <Large className="underline decoration-primary decoration-[0.3333rem] underline-offset-8">
                    {title}
                  </Large>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {media1.type !== 'none' && (
                  <AspectRatio ratio={16 / 9}>
                    {media1.type === 'embed' && (
                      <IFrame
                        src={media1.src}
                        title={media1.description}
                      />
                    )}
                    {media1.type === 'image' && (
                      <Image
                        src={media1.src}
                        alt={media1.description}
                        fill
                      />
                    )}
                  </AspectRatio>
                )}
                {text1}
                {media2.type !== 'none' && (
                  <AspectRatio ratio={16 / 9}>
                    {media2.type === 'embed' && (
                      <IFrame
                        src={media2.src}
                        title={media2.description}
                      />
                    )}
                    {media2.type === 'image' && (
                      <Image
                        src={media2.src}
                        alt={media2.description}
                        fill
                      />
                    )}
                  </AspectRatio>
                )}
                {text2}
              </CardContent>
              <CardFooter className="flex flex-col items-start justify-start gap-2">
                <Anchor href="#">Back to top.</Anchor>
                <Anchor
                  href="#directory"
                  className="lg:hidden"
                >
                  Back to directory.
                </Anchor>
              </CardFooter>
            </Card>
          </article>
        ))}
      </div>
    </section>
  );
});
CoolStuff.displayName = 'CoolStuff';

export default CoolStuff;
