import pageData from "@/data/pageData";
import Link from "next/link";

const NavLinks = () => {
  return (
    <ul className="fixed flex min-h-screen w-screen flex-col items-center justify-center gap-6 bg-black bg-opacity-50 bg-clip-padding py-6 text-center backdrop-blur-lg backdrop-filter">
      {pageData.map((link, index) => (
        <li key={index}>
          <Link href={link.href} className="m-1 flex flex-col">
            <span
              className={`text-white" text-2xl font-bold ${link.textColor}`}
            >
              {link.name}
            </span>
            <span className="text-neutral-300">{link.description}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
