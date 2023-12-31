import CallToAction from "../components/CallToAction";
import ContentWrapper from "../components/ContentWrapper";
import Main from "../components/Main";
import Randomizer from "../components/Randomizer";

const About = () => {
  return (
    <ContentWrapper>
      <Main page="About" />
      <Randomizer page="About" />
      <CallToAction linkedPages={[]} />
    </ContentWrapper>
  );
};

export default About;
