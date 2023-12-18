import pageData from "@/data/pageData";
import pageStyles from "@/data/pageStyles";

const Main = ({ page }: { page: string }) => {
  const thisPage = pageData.find((element) => element.page === page);

  return (
    <main className="mx-auto flex flex-col items-center justify-start text-center sm:text-xl">
      <section>
        <h1
          className={`text-4xl font-bold sm:text-6xl ${thisPage?.styles?.textColor}`}
        >
          {thisPage?.main?.heading}
        </h1>
        <p className="pt-6 text-neutral-300 sm:pt-10">
          {thisPage?.main?.subheading}
        </p>
      </section>
    </main>
  );
};

export default Main;
