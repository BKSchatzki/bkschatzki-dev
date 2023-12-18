import PageWrapper from "@/components/PageWrapper";
import ContentWrapper from "@/components/ContentWrapper";
import Main from "@/components/Main";
import CallToAction from "@/components/CallToAction";

const Projects = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <Main page="Projects" />
        <CallToAction linkedPages={["Contact"]} />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Projects;
