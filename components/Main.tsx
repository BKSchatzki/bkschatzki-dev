import pageData from "@/data/pageData";

const Main = ({ page }: { page: string }) => {
  const thisPage = pageData.find((e) => e.title === page);

  return (
    <main className="mx-auto mt-16 flex flex-col items-center justify-start text-center sm:mt-32">
      <section className="max-w-md">
        <h1
          className={`text-4xl font-bold ${thisPage?.styleClasses.textColor}`}
        >
          {thisPage?.main.heading}
        </h1>
        <p className="pt-6 text-neutral-300">{thisPage?.main.subheading}</p>
      </section>
    </main>
  );
};

export default Main;
