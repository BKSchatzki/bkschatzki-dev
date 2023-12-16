import LinkList from "./LinkList";

const Hero = () => {
  return (
    <div className="hero bg-base-200 mx-auto min-h-screen w-11/12">
      <main className="hero-content text-center">
        <section className="flex max-w-md flex-col items-center justify-center">
          <h1 className="text-5xl font-bold">{"Hello World"}</h1>
          <p className="text-base-content py-6">
            {
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            }
          </p>
          <LinkList />
        </section>
      </main>
    </div>
  );
};

export default Hero;
