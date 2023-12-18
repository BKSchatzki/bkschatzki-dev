import pageData from "@/data/pageData";

const Carousel = ({ page }: { page: String }) => {
  const thisPage = pageData.find((element) => element.title === page);
  const thisCarousel = thisPage?.sections.find(
    (element) => element.type === "carousel",
  );

  return (
    <article className="carousel carousel-vertical mt-6 h-48 w-full space-y-3 rounded-md sm:h-96">
      {thisCarousel?.items.map((element, index) => (
        <>
          <section
            key={index}
            className="carousel-item h-[67.666667%] flex-col items-center justify-center gap-3 rounded-md bg-gradient-to-b from-neutral-950 to-transparent px-6 py-3 ring-neutral-300"
          >
            <h3 className="text-2xl font-semibold">{element.heading}</h3>
            <p className="text-center text-neutral-300">{element.subheading}</p>
          </section>
        </>
      ))}
    </article>
  );
};

export default Carousel;
