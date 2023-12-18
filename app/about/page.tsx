import RootLayout from "../layout";
import PageWrapper from "@/components/PageWrapper";
import Main from "@/components/Main";
import Carousel from "@/components/Carousel";
import CallToAction from "@/components/CallToAction";

const About = () => {
  return (
    <RootLayout page="About">
      <PageWrapper>
        <Main page="About" />
        <CallToAction linkedPages={["Contact"]} />
      </PageWrapper>
    </RootLayout>
  );
};

export default About;
