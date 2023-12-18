import PageWrapper from "@/components/PageWrapper";
import ContentWrapper from "@/components/ContentWrapper";
import Main from "@/components/Main";
import Carousel from "@/components/Carousel";
import CallToAction from "@/components/CallToAction";

const Services = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <Main page="Services" />
        <Carousel page="Services" />
        <CallToAction linkedPages={["Contact"]} />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Services;
