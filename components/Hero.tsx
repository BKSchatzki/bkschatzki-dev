const Hero = () => {
  return (
    <div className="hero bg-base-200 mx-auto min-h-screen">
      <main className="hero-content text-left">
        <section className="max-w-md">
          <h1 className="text-5xl font-bold">{"Hello World"}</h1>
          <p className="text-base-content py-6">
            {
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            }
          </p>
        </section>
      </main>
    </div>
  );
};

export default Hero;
