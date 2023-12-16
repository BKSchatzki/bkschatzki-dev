import Main from "@/components/Main";
import Carousel from "@/components/Carousel";

const Services = () => {
  return (
    <div className="mx-auto flex min-h-screen w-11/12 max-w-3xl flex-col items-center justify-start">
      <Main page="Services" />
      <Carousel page="Services" />
    </div>
  );
};

export default Services;
