import { Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const externalLinks = [
  {
    type: "socials",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/BKSchatzki",
        icon: (
          <>
            <Github size={16} className="block text-neutral-500 sm:hidden" />
            <Github size={24} className="hidden text-neutral-500 sm:block" />
          </>
        ),
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bkschatzki/",
        icon: (
          <>
            <Linkedin
              size={16}
              className="block text-[hsl(210,59.333333%,40%)] sm:hidden"
            />
            <Linkedin
              size={24}
              className="hidden text-[hsl(210,59.333333%,40%)] sm:block"
            />
          </>
        ),
      },
      {
        name: "Twitter",
        url: "https://twitter.com/bkschatzki",
        icon: (
          <>
            <Twitter
              size={16}
              className="block text-[hsl(203,58.666667%,53%)] sm:hidden"
            />
            <Twitter
              size={24}
              className="hidden text-[hsl(203,58.666667%,53%)] sm:block"
            />
          </>
        ),
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/bkschatzki/",
        icon: (
          <>
            <Instagram
              size={16}
              className="block text-[hsl(313,42.666667%,47%)] sm:hidden"
            />
            <Instagram
              size={24}
              className="hidden text-[hsl(313,42.666667%,47%)] sm:block"
            />
          </>
        ),
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/channel/UCBtQ9HQ990E2k21RjmOMUfQ",
        icon: (
          <>
            <Youtube
              size={16}
              className="block text-[hsl(0,66.666667%,50%)] sm:hidden"
            />
            <Youtube
              size={24}
              className="hidden text-[hsl(0,66.666667%,50%)] sm:block"
            />
          </>
        ),
      },
    ],
  },
];

export default externalLinks;
