import pageData from "@/data/pageData";
import pageStyles from "@/data/pageStyles";

const Carousel = ({ page }: { page: String }) => {
  const thisPage = pageData.find((element) => element.page === page);
  const thisCarousel = thisPage?.sections?.find(
    (element) => element.type === "carousel",
  );

  return (
    <article className="carousel carousel-vertical mt-6 h-48 w-full space-y-3 rounded-md sm:mt-10 sm:h-96 sm:space-y-5">
      {thisCarousel?.items.map((element, index) => (
        <>
          <section
            key={index}
            className={`carousel-item h-[67.666667%] flex-col items-center justify-center gap-3 rounded-md px-6 py-3 ${thisPage?.styles?.bgColorSectionGradient}`}
          >
            <h3 className="text-2xl font-semibold sm:text-4xl">
              {element.heading}
            </h3>
            <p className="text-center text-neutral-300 sm:text-xl">
              {element.subheading}
            </p>
          </section>
        </>
      ))}
    </article>
  );
};

export default Carousel;
