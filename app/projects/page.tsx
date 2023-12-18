import PageWrapper from "@/components/PageWrapper";
import Main from "@/components/Main";
import Carousel from "@/components/Carousel";
import CallToAction from "@/components/CallToAction";

const Projects = () => {
  return (
    <PageWrapper>
      <Main page="Projects" />
      <Carousel page="Services" />
      <CallToAction linkedPages={["Contact"]} />
    </PageWrapper>
  );
};

export default Projects;
