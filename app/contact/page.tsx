import PageWrapper from "@/components/PageWrapper";
import Main from "@/components/Main";
import CallToAction from "@/components/CallToAction";

const Contact = () => {
  return (
    <PageWrapper>
      <Main page="Contact" />
      <CallToAction linkedPages={["Contact"]} />
    </PageWrapper>
  );
};

export default Contact;
