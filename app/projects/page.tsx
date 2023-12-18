import RootLayout from "../layout";
import PageWrapper from "@/components/PageWrapper";
import Main from "@/components/Main";
import Carousel from "@/components/Carousel";
import CallToAction from "@/components/CallToAction";

const Projects = () => {
  return (
    <RootLayout page="Projects">
      <PageWrapper>
        <Main page="Projects" />
        <Carousel page="Services" />
        <CallToAction linkedPages={["Contact"]} />
      </PageWrapper>
    </RootLayout>
  );
};

export default Projects;
