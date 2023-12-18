import Main from "@/components/Main";
import Carousel from "@/components/Carousel";
import CallToAction from "@/components/CallToAction";

const Services = () => {
  return (
    <div className="mx-auto flex min-h-screen w-11/12 max-w-3xl flex-col items-center justify-center">
      <Main page="Services" />
      <Carousel page="Services" />
      <CallToAction linkedPages={["Contact"]} />
    </div>
  );
};

export default Services;
