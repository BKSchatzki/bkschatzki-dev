import pageData from "@/data/pageData";
import Link from "next/link";

const NavLinks = () => {
  return (
    <ul className="fixed flex min-h-screen w-screen flex-col items-center justify-center gap-6 bg-black bg-opacity-50 bg-clip-padding py-6 text-center backdrop-blur-lg backdrop-filter">
      {pageData.map((page, index) => (
        <li key={index}>
          <Link href={page.navLink.href} className="m-1 flex flex-col">
            <span
              className={`text-2xl font-bold ${page.styleClasses.textColor}`}
            >
              {page.navLink.name}
            </span>
            <span className="text-neutral-300">{page.navLink.description}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
