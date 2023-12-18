import pageData from "@/data/pageData";

import Link from "next/link";

const CallToAction = ({ linkedPages }: { linkedPages: string[] }) => {
  const thesePages = pageData.filter((e) => linkedPages.includes(e.page));

  return (
    <ul className="mt-6 grid w-full grid-cols-12 gap-3 text-center sm:mt-10 sm:gap-4">
      {thesePages?.map((page, index) => (
        <li key={index} className="col-span-6 only:col-start-4">
          <Link
            href={page.navLink?.href || "/"}
            className={`m-1 flex w-full flex-col rounded-md px-4 py-2 text-black sm:px-6 sm:py-3 ${page.styles?.bgColorAccent}`}
          >
            <span className="text-xl font-bold sm:text-3xl">
              {page.navLink?.name}
            </span>
            <span className="text-sm font-semibold sm:text-lg">
              {page.navLink?.description}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CallToAction;
