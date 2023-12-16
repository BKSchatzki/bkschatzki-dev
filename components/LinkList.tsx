import siteLinks from "@/data/siteLinks";
import Button from "./Button";

const LinkList = () => {
  return (
    <ul>
      {siteLinks.map((link, index) => {
        return (
          <li key={index}>
            <Button name={link.name} href={link.href} />
          </li>
        );
      })}
    </ul>
  );
};

export default LinkList;
