import ContentWrapper from "@/components/ContentWrapper";
import Main from "@/components/Main";
import CallToAction from "@/components/CallToAction";

const Projects = () => {
  return (
    <ContentWrapper>
      <Main page="Projects" />
      <CallToAction linkedPages={["Contact"]} />
    </ContentWrapper>
  );
};

export default Projects;
