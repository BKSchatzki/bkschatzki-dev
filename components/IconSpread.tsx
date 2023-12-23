import pageData from "@/data/pageData";
import techIcons from "@/data/techIcons";

import Image from "next/image";

const IconSpread = ({ page }: { page: string }) => {
  const thisPage = pageData.find((e) => e.page === page);

  return (
    <ul
      className={`mt-6 grid w-full grid-cols-12 items-center justify-center gap-3 rounded-md p-3 sm:gap-6 sm:p-6 ${thisPage?.styles?.bgColorBase}`}
    >
      {techIcons.map((icon, index) => (
        <li key={index} className="col-span-2 flex items-center justify-center">
          <a href={icon.href} target="_blank" rel="noopener noreferrer">
            <Image
              src={icon.src}
              alt={icon.alt}
              className="h-8 w-8 sm:h-12 sm:w-12"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default IconSpread;
