import PageWrapper from "@/components/PageWrapper";
import Main from "@/components/Main";
import Carousel from "@/components/Carousel";
import CallToAction from "@/components/CallToAction";

const Services = () => {
  return (
    <PageWrapper>
      <Main page="Services" />
      <Carousel page="Services" />
      <CallToAction linkedPages={["Contact"]} />
    </PageWrapper>
  );
};

export default Services;
