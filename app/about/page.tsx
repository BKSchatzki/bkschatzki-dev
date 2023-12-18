import PageWrapper from "@/components/PageWrapper";
import ContentWrapper from "@/components/ContentWrapper";
import Main from "@/components/Main";
import CallToAction from "@/components/CallToAction";

const About = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <Main page="About" />
        <CallToAction linkedPages={[]} />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default About;
