import { useRef } from "react";

import {
  motion,
  useInView,
} from "framer-motion";
import { Link } from "react-router-dom";

import pageData from "../data/pageData";

const CallToAction = ({ linkedPages }: { linkedPages: string[] }) => {
  const thesePages = pageData.filter((e) => linkedPages.includes(e.page));

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <ul className="mt-6 grid w-full grid-cols-12 gap-3 text-center sm:mt-10 sm:gap-4">
      {thesePages?.map((page) => (
        <motion.li
          key={page.page}
          ref={ref}
          className="col-span-6 only:col-start-4"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isInView ? 1 : 0,
            transition: { delay: 0.2 + 0.15 },
          }}
          exit={{ opacity: 0 }}
        >
          <Link
            to={page.navLink?.href || "/"}
            className={`flex w-full flex-col rounded-md px-4 py-2 text-black sm:px-6 sm:py-3 ${page.styles?.bgColorAccent}`}
          >
            <span className="text-xl font-bold sm:text-3xl">
              {page.navLink?.name}
            </span>
            <span className="text-sm font-semibold sm:text-lg">
              {page.navLink?.description}
            </span>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
};

export default CallToAction;
