import CallToAction from "../components/CallToAction";
import ContentWrapper from "../components/ContentWrapper";
import IconSpread from "../components/IconSpread";
import Main from "../components/Main";

const Projects = () => {
  return (
    <ContentWrapper>
      <Main page="Projects">
        <IconSpread page="Projects" />
        <CallToAction linkedPages={["Contact"]} />
      </Main>
    </ContentWrapper>
  );
};

export default Projects;
