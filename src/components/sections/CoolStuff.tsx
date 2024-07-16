import * as React from 'react';

import Image from 'next/image';

import { AspectRatio } from '@radix-ui/react-aspect-ratio';

import {
  Anchor,
  H2,
  Large,
  P,
} from '../typography';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../ui/card';

interface Props {
  className?: string;
  [key: string]: any;
}

const stuff = [
  {
    title: 'The one where I fixed creativity',
    media1: {
      type: 'embed',
      src: 'https://www.youtube-nocookie.com/embed/Z7BDWhVJOpw?si=AkVoqA6GmGAvVpIG&amp;start=73',
      description: 'Brendan K. Schatzki SongStrudel Presentation at Tech Alley Las Vegas',
    },
    media2: {
      type: 'embed',
      src: 'https://www.youtube-nocookie.com/embed/C18d1PZjjuw?si=2UM-ELONjtMCgaHT&amp;start=37',
      description: 'Brendan K. Schatzki SongStrudel App Demonstration',
    },
    text1: (
      <P className="mb-6">
        I presented{' '}
        <Large>
          <Anchor
            href="https://songstrudel.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            SongStrudel
          </Anchor>{' '}
          <Anchor
            href="https://github.com/BKSchatzki/songstrudel"
            target="_blank"
            rel="noreferrer"
          >
            (Repo)
          </Anchor>
        </Large>{' '}
        to the Vegas Programmers Meetup at Tech Alley Las Vegas, which I regularly attend. I was fed
        up with how hundreds of musicians including myself were having trouble finishing their
        songs, and made a tool that hits the sweet spot between detail and speed when first drafting
        the structure of a musical concept, taken from surveying a private community of over 1,000
        producers.
      </P>
    ),
    text2: (
      <P>
        Fun fact: the &quot;strudel&quot; in SongStrudel came from the initial design of the app,
        though it ended up looking much more like a waffle.
      </P>
    ),
  },
  {
    title: 'The one where I fixed Dungeons & Dragons exploration:',
    media1: {
      type: 'image',
      src: '/images/PartyRoomBloom-SceneReview.png',
      description: 'Brendan K. Schatzki Party Room Bloom Scene Review',
    },
    media2: {
      type: 'image',
      src: '/images/PartyRoomBloom-GeneratedPdf.png',
      description: 'PartyRoomBloom Generated Pdf',
    },
    text1: (
      <P className="mb-6">
        Dungeons & Dragons exploration{' '}
        <Anchor
          href="https://www.youtube-nocookie.com/embed/Sd2svbU7t50?si=TVBfQezed_i5kBLq"
          target="_blank"
          rel="noreferrer"
        >
          sucks
        </Anchor>{' '}
        so I made{' '}
        <Large>
          <Anchor
            href="https://partyroombloom.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            PartyRoomBloom
          </Anchor>{' '}
          <Anchor
            href="https://github.com/BKSchatzki/partyroombloom"
            target="_blank"
            rel="noreferrer"
          >
            (Repo)
          </Anchor>
        </Large>{' '}
        to help game masters scaffold their rooms. The two images in this card showcase the final
        scene review page and the generated PDF. It is part of a series of opinionated, assistive
        tools whose paradigms have been vetted by the community. It runs as a local application, but
        upon finalization of the 1.0 design it will allow game masters to store a database of rooms,
        relate them to each other, feed a specific room layout into GenAI to create a battlemap and
        scene image.
      </P>
    ),
    text2: (
      <P>
        Several prominent game masters, including those who run acclaimed actual plays and podcasts,
        have provided input into the tool and it is in continuous development. In addition to the
        room builder, there are plans for assistive tools helping game masters with factions,
        characters, settlements, pantheons, etc.
      </P>
    ),
  },
];

const IFrame = ({ src, title }: { src: string; title: string }) => {
  return (
    <iframe
      width="100%"
      height="100%"
      src={src}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
};

const CoolStuff = React.forwardRef<HTMLDivElement, Props>(({ className, ...props }, ref) => {
  return (
    <section /* className="2xl:pt-10" */>
      <H2 className="header-space:px-6 border-0">Stuff you might think is kind of cool.</H2>
      <div className="flex flex-col items-center justify-center gap-5">
        {stuff.map(({ title, media1, media2, text1, text2 }, i) => (
          <article key={title}>
            <Card>
              <CardHeader>
                <CardTitle>
                  <Large className="underline decoration-primary decoration-[0.3333rem] underline-offset-8">
                    {title}
                  </Large>
                </CardTitle>
              </CardHeader>
              <CardContent>
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
                {text1}
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
                {text2}
              </CardContent>
            </Card>
          </article>
        ))}
      </div>
    </section>
  );
});
CoolStuff.displayName = 'CoolStuff';

export default CoolStuff;
