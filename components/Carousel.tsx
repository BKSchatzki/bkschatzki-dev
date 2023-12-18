import pageData from "@/data/pageData";

const Carousel = ({ page }: { page: String }) => {
  const thisPage = pageData.find((e) => e.title === page);
  const thisCarousel = thisPage?.sections.find((e) => e.type === "carousel");

  return (
    <article className="carousel carousel-vertical mt-6 h-48 w-full max-w-md space-y-3 rounded-md">
      {thisCarousel?.items.map((item, index) => (
        <section
          key={index}
          className="carousel-item h-[67.666667%] flex-col items-center justify-center gap-3 rounded-md bg-neutral-950 px-6 py-3"
        >
          <h3 className="text-2xl font-semibold">{item.heading}</h3>
          <p className="text-center text-neutral-300">{item.subheading}</p>
        </section>
      ))}
    </article>
  );
};

export default Carousel;
