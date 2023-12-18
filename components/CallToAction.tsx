import pageData from "@/data/pageData";

import Link from "next/link";

const CallToAction = ({ linkedPages }: { linkedPages: string[] }) => {
  const thesePages = pageData.filter((element) =>
    linkedPages.includes(element.page),
  );

  return (
    <ul className="mt-6 grid w-full grid-cols-12 gap-3 text-center sm:mt-10 sm:gap-4">
      {thesePages?.map((element, index) => (
        <li key={index} className="col-span-6">
          <Link
            href={element.navLink?.href || "/"}
            className={`m-1 flex w-full flex-col rounded-md px-4 py-2 text-black sm:px-6 sm:py-3 ${element.styles?.bgColorAccent}`}
          >
            <span className="text-xl font-bold sm:text-3xl">
              {element.navLink?.name}
            </span>
            <span className="text-sm font-semibold sm:text-lg">
              {element.navLink?.description}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CallToAction;
