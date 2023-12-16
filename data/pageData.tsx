const pageData = [
  {
    title: "Home",
    main: {
      heading: "Hey traveler,",
      subheading:
        "Fancy seeing you here. I'm Brendan, a web developer. I build websites and web apps for small businesses and startups. Let's get you to where you need to go.",
    },
    navLink: { name: "Home", description: "Back to home", href: "/" },
    styleClasses: {
      bgColor: "bg-gradient-to-br from-amber-400 to-yellow-400",
      textColor: "text-yellow-400",
    },
  },
  {
    title: "Services",
    main: {
      heading: "Need a site?",
      subheading:
        "Is your web presence working for you? You want a site that looks good, works well, and is easy to maintain. I can help you with that. Here's how I make it work for you.",
    },
    navLink: {
      name: "Services",
      description: "I need a website",
      href: "/services",
    },
    styleClasses: {
      bgColor: "bg-gradient-to-br from-green-400 to-emerald-400",
      textColor: "text-emerald-400",
    },
  },
  {
    title: "Projects",
    main: {
      heading: "Front-to-Back",
      subheading: "",
    },
    navLink: {
      name: "Projects",
      description: "I need a dev",
      href: "/projects",
    },
    styleClasses: {
      bgColor: "bg-gradient-to-br from-cyan-400 to-sky-400",
      textColor: "text-sky-400",
    },
  },
  {
    title: "About",
    main: {
      heading: "",
      subheading: "",
    },
    navLink: { name: "About", description: "Get to know me", href: "/about" },
    styleClasses: {
      bgColor: "bg-gradient-to-br from-indigo-400 to-violet-400",
      textColor: "text-violet-400",
    },
  },
  {
    title: "Contact",
    main: {
      heading: "",
      subheading: "",
    },
    navLink: { name: "Contact", description: "Get in touch", href: "/contact" },
    styleClasses: {
      bgColor: "bg-gradient-to-br from-fuchsia-400 to-pink-400",
      textColor: "text-pink-400",
    },
  },
];

export default pageData;
