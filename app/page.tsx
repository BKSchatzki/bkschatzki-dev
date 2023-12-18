import PageWrapper from "@/components/PageWrapper";
import Main from "@/components/Main";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <PageWrapper>
      <Main page="Home" />
      <CallToAction linkedPages={["Services", "Projects"]} />
    </PageWrapper>
  );
}
