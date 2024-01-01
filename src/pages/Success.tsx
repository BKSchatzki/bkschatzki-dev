import CallToAction from "../components/CallToAction";
import ContentWrapper from "../components/ContentWrapper";
import Main from "../components/Main";

const About = () => {
  return (
    <ContentWrapper>
      <Main page="Success" />
      <CallToAction linkedPages={["Home"]} />
    </ContentWrapper>
  );
};

export default About;
