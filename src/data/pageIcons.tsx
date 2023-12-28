import {
  Home,
  HelpCircle,
  FolderOpenDot,
  SquareUser,
  Send,
} from "lucide-react";

const pageIcons = [
  {
    page: "Home",
    icon: (
      <>
        <Home size={24} className="block sm:hidden" />
        <Home size={36} className="hidden sm:block" />
      </>
    ),
  },
  {
    page: "Services",
    icon: (
      <>
        <HelpCircle size={24} className="block sm:hidden" />
        <HelpCircle size={36} className="hidden sm:block" />
      </>
    ),
  },
  {
    page: "Projects",
    icon: (
      <>
        <FolderOpenDot size={24} className="block sm:hidden" />
        <FolderOpenDot size={36} className="hidden sm:block" />
      </>
    ),
  },
  {
    page: "About",
    icon: (
      <>
        <SquareUser size={24} className="block sm:hidden" />
        <SquareUser size={36} className="hidden sm:block" />
      </>
    ),
  },
  {
    page: "Contact",
    icon: (
      <>
        <Send size={24} className="block sm:hidden" />
        <Send size={36} className="hidden sm:block" />
      </>
    ),
  },
];

export default pageIcons;
