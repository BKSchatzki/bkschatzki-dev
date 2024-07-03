import { motion } from 'framer-motion';

import pageData from '../data/pageData';

const Main = ({
  page,
  children,
}: {
  page: string;
  children?: React.ReactNode;
}) => {
  const thisPage = pageData.find((e) => e.page === page);

  return (
    <main className="relative mx-auto flex flex-col items-center justify-start text-center sm:text-xl">
      {page === "Home" && (
        <motion.div
          className="absolute -top-1/3 left-1/2 -z-10 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.3 + 0.15 } }}
        >
          <div className="relative w-full">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black to-75%"></div>
            <img src="/avatar.jpg" alt="" className="rounded-full" />
          </div>
        </motion.div>
      )}
      <section>
        <motion.h1
          className={`text-4xl font-bold sm:text-6xl ${thisPage?.styles?.textColor}`}
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { delay: 0.1 + 0.15 },
          }}
          exit={{ opacity: 0, y: 25, scale: 0.8 }}
        >
          {thisPage?.main?.heading}
        </motion.h1>
        <motion.p
          className="mt-6 text-balance sm:mt-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0 + 0.15 } }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          {thisPage?.main?.subheading}
        </motion.p>
      </section>
      {children}
    </main>
  );
};

export default Main;
