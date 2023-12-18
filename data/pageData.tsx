const pageData = [
  {
    title: "Home",
    main: {
      heading: "Hey traveler,",
      subheading:
        "Fancy seeing you here. I'm Brendan, a web developer. I build websites and web apps for small businesses and startups. Let's get you to where you need to go.",
    },
    sections: [],
    navLink: { name: "Home", description: "Back to home", href: "/" },
    styleClasses: {
      bgColor: "bg-black",
      textBgColor: "bg-yellow-400",
      textColor: "text-yellow-400",
    },
  },
  {
    title: "Services",
    main: {
      heading: "Need a site?",
      subheading:
        "Is your web presence working for you? You want a site that looks good, works well, and is easy to maintain. I can help you with that. Here's how it works.",
    },
    sections: [
      {
        type: "carousel",
        heading: "Step-by-step",
        subheading: "",
        items: [
          {
            heading: "Consultation",
            subheading:
              "It all begins with a conversation where we'll pinpoint what this project is all about.",
            image: "",
            imageAlt: "",
            media: "",
          },
          {
            heading: "Proposal",
            subheading:
              "A detailed project proposal will be presented and a plan of action will be decided.",
            image: "",
            imageAlt: "",
            media: "",
          },
          {
            heading: "Creation",
            subheading:
              "Clients receive regular updates regarding their project status while I create and test it.",
            image: "",
            imageAlt: "",
            media: "",
          },
          {
            heading: "Launch & Support",
            subheading:
              "Peace of mind is delivered with the final project in the form of available ongoing support.",
            image: "",
            imageAlt: "",
            media: "",
          },
        ],
      },
    ],
    navLink: {
      name: "Services",
      description: "I need a site",
      href: "/services",
    },
    styleClasses: {
      bgColor: "bg-[hsl(167,96%,2.25%)]",
      textBgColor: "bg-emerald-400",
      textColor: "text-emerald-400",
    },
  },
  {
    title: "Projects",
    main: {
      heading: "Front-to-Back",
      subheading:
        "I build software that enhances people's lives and work. Here are some of my projects I've found to be most impactful.",
    },
    sections: [],
    navLink: {
      name: "Projects",
      description: "I need a dev",
      href: "/projects",
    },
    styleClasses: {
      bgColor: "bg-[hsl(204,80%,4%)]",
      textBgColor: "bg-sky-400",
      textColor: "text-sky-400",
    },
  },
  {
    title: "About",
    main: {
      heading: "",
      subheading: "",
    },
    sections: [],
    navLink: { name: "About", description: "Get to know me", href: "/about" },
    styleClasses: {
      bgColor: "bg-[hsl(261,73%,5.75%)]",
      textBgColor: "bg-violet-400",
      textColor: "text-violet-400",
    },
  },
  {
    title: "Contact",
    main: {
      heading: "",
      subheading: "",
    },
    sections: [],
    navLink: { name: "Contact", description: "Get in touch", href: "/contact" },
    styleClasses: {
      bgColor: "bg-[hsl(336,84%,4.25%)]",
      textBgColor: "bg-pink-400",
      textColor: "text-pink-400",
    },
  },
];

export default pageData;
