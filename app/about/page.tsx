import PageWrapper from "@/components/PageWrapper";
import Main from "@/components/Main";
import CallToAction from "@/components/CallToAction";

const About = () => {
  return (
    <PageWrapper>
      <Main page="About" />
      <CallToAction linkedPages={["Home", "Contact"]} />
    </PageWrapper>
  );
};

export default About;
