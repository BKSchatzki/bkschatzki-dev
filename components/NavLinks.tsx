import siteLinks from "@/data/siteLinks";
import Button from "./Button";

const NavLinks = () => {
  return (
    <ul>
      {siteLinks.map((link, index) => (
        <li key={index}>
          <Button name={link.name} href={link.href} />
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
