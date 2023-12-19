import externalLinks from "../data/externalLinks";

const SocialLinks = () => {
  const socials = externalLinks.find((e) => e.type === "socials");

  return (
    <ul className="flex gap-4 sm:gap-6">
      {socials?.links.map((link, index) => (
        <li key={index}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
