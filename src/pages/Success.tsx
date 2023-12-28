import ContentWrapper from "../components/ContentWrapper";
import Main from "../components/Main";
import CallToAction from "../components/CallToAction";

const About = () => {
  return (
    <ContentWrapper>
      <Main page="Success" />
      <CallToAction linkedPages={["Home"]} />
    </ContentWrapper>
  );
};

export default About;
