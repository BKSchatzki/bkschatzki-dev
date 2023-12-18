import pageData from "@/data/pageData";

import Link from "next/link";

const CallToAction = ({ linkedPages }: { linkedPages: string[] }) => {
  const thesePages = pageData.filter((element) =>
    linkedPages.includes(element.page),
  );

  return (
    <ul className="mt-6 grid w-full grid-cols-12 gap-3 text-center">
      {thesePages?.map((element, index) => (
        <li key={index} className="col-span-6">
          <Link
            href={element.navLink?.href || "/"}
            className={`m-1 flex w-full flex-col rounded-md px-6 py-3 text-black ${element.styles?.bgColorAccent}`}
          >
            <span className="text-xl font-bold">{element.navLink?.name}</span>
            <span className="text-sm font-semibold">
              {element.navLink?.description}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CallToAction;
