import ContentWrapper from "@/components/ContentWrapper";
import Main from "@/components/Main";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <ContentWrapper>
      <Main page="Home" />
      <CallToAction linkedPages={["Services", "Projects"]} />
      <img src="." alt="" />
    </ContentWrapper>
  );
}
