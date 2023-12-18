import pageData from "@/data/pageData";

import Link from "next/link";

const CallToAction = ({ linkedPages }: { linkedPages: string[] }) => {
  const thesePages = pageData.filter((element) =>
    linkedPages.includes(element.title),
  );

  return (
    <ul className="mt-6 flex gap-3 text-center max-sm:flex-col">
      {thesePages?.map((element, index) => (
        <li key={index}>
          <Link
            href={element.navLink.href}
            className={`m-1 flex w-48 flex-col rounded-md px-6 py-3 text-black ${element.styleClasses.bgColor}`}
          >
            <span className="text-xl font-bold">{element.navLink.name}</span>
            <span className="text-sm font-semibold">
              {element.navLink.description}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CallToAction;
