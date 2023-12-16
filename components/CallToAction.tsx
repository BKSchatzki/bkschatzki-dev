import pageData from "@/data/pageData";

import Link from "next/link";

const CallToAction = ({ linkedPages }: { linkedPages: string[] }) => {
  const thesePages = pageData.filter((e) => linkedPages.includes(e.title));

  return (
    <ul className="mt-6 flex gap-3 text-center max-sm:flex-col">
      {thesePages?.map((call, index) => (
        <li key={index}>
          <Link
            href={call.navLink.href}
            className={`m-1 flex w-48 flex-col rounded-md px-6 py-3 text-black ${call.styleClasses.bgColor}`}
          >
            <span className="text-xl font-bold">{call.navLink.name}</span>
            <span className="text-sm font-semibold">
              {call.navLink.description}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CallToAction;
