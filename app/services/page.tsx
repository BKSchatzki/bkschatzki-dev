import RootLayout from "../layout";
import PageWrapper from "@/components/PageWrapper";
import Main from "@/components/Main";
import Carousel from "@/components/Carousel";
import CallToAction from "@/components/CallToAction";

const Services = () => {
  return (
    <RootLayout page="Services">
      <PageWrapper>
        <Main page="Services" />
        <Carousel page="Services" />
        <CallToAction linkedPages={["Contact"]} />
      </PageWrapper>
    </RootLayout>
  );
};

export default Services;
