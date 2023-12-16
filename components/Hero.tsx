import pageData from "@/data/pageData";

const Hero = ({ page }: { page: string }) => {
  const thisPage = pageData.find((e) => e.name === page);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center">
      <section className="max-w-md">
        <h1 className={`text-5xl font-bold ${thisPage?.textColor}`}>
          {"Hello World"}
        </h1>
        <p className="py-6">
          {
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          }
        </p>
      </section>
    </main>
  );
};

export default Hero;
