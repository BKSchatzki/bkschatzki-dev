import {
  Anchor,
  Large,
  P,
} from '@/components/typography';

export const stuff = [
  {
    id: 'songstrudel',
    linkText: 'Getting Music Done',
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
    id: 'partyroombloom',
    linkText: 'Fixing D&D Exploration',
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
  {
    id: 'ecohz',
    linkText: 'Solving Climate Funding',
    title: 'The one where I accidentally became a founding engineer:',
    media1: {
      type: 'image',
      src: '/images/Ecohz-UserDashboard.png',
      description: 'Brendan K. Schatzki Ecohz User Dashboard',
    },
    media2: {
      type: 'none',
      src: '',
      description: '',
    },
    text1: (
      <P>
        Despite how much I dunk on LinkedIn for its members&apos; propensity to sell the mundane as
        profound, I admit that occasionally a connection becomes a friendship becomes a partnership.
        I did not expect that contributing a frontend to a group passion project would end up
        putting me at the head of the software development lifecycle for a nascent startup. Perks
        are getting to refactor the whole stack. But as soon as I had gotten worked up to do the
        engineering roadmap, my friend the founder went back to the drawing board and I&apos;m stuck
        here twiddling my thumbs. (Kidding, business rules me.)
      </P>
    ),
    text2: null,
  },
];
