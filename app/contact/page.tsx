import PageWrapper from "@/components/PageWrapper";
import Main from "@/components/Main";
import CallToAction from "@/components/CallToAction";

const Contact = () => {
  return (
    <PageWrapper>
      <Main page="Contact" />
      <CallToAction linkedPages={["Home", "About"]} />
    </PageWrapper>
  );
};

export default Contact;
