import PageWrapper from "@/components/PageWrapper";
import ContentWrapper from "@/components/ContentWrapper";
import Main from "@/components/Main";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <PageWrapper>
      <ContentWrapper>
        <Main page="Home" />
        <CallToAction linkedPages={["Services", "Projects"]} />
      </ContentWrapper>
    </PageWrapper>
  );
}
