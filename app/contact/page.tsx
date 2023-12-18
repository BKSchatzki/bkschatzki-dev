import PageWrapper from "@/components/PageWrapper";
import ContentWrapper from "@/components/ContentWrapper";
import Main from "@/components/Main";
import CallToAction from "@/components/CallToAction";

const Contact = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <Main page="Contact" />
        <CallToAction linkedPages={[]} />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Contact;
