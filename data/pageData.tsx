import pageIcons from "./pageIcons";
import pageMains from "./pageMains";
import pageNavLinks from "./pageNavLinks";
import pageSections from "./pageSections";
import pageStyles from "./pageStyles";

const pageData = [
  {
    page: "Home",
  },
  {
    page: "Services",
  },
  {
    page: "Projects",
  },
  {
    page: "About",
  },
  {
    page: "Contact",
  },
  {
    page: "Success",
  },
];

export default pageData.map((element) => {
  const icons = pageIcons.find((icon) => icon.page === element.page);
  const mains = pageMains.find((main) => main.page === element.page);
  const navLinks = pageNavLinks.find(
    (navLink) => navLink.page === element.page,
  );
  const sections = pageSections.find(
    (section) => section.page === element.page,
  );
  const styles = pageStyles.find((style) => style.page === element.page);
  return {
    ...element,
    icon: icons?.icon,
    main: mains?.main,
    navLink: navLinks?.navLink,
    sections: sections?.sections,
    styles: styles?.styles,
  };
});
