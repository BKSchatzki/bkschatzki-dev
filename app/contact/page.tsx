import RootLayout from "../layout";
import PageWrapper from "@/components/PageWrapper";
import Main from "@/components/Main";
import Carousel from "@/components/Carousel";
import CallToAction from "@/components/CallToAction";

const Contact = () => {
  return (
    <RootLayout page="Contact">
      <PageWrapper>
        <Main page="Contact" />
        <CallToAction linkedPages={["Contact"]} />
      </PageWrapper>
    </RootLayout>
  );
};

export default Contact;
