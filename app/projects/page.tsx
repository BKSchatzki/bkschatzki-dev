import PageWrapper from "@/components/PageWrapper";
import Main from "@/components/Main";
import Carousel from "@/components/Carousel";
import CallToAction from "@/components/CallToAction";

const Projects = () => {
  return (
    <PageWrapper>
      <Main page="Projects" />
      <CallToAction linkedPages={["Services", "Contact"]} />
    </PageWrapper>
  );
};

export default Projects;
