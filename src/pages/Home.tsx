import CallToAction from "../components/CallToAction";
import ContentWrapper from "../components/ContentWrapper";
import Main from "../components/Main";

export default function Home() {
  return (
    <ContentWrapper>
      <Main page="Home" />
      <CallToAction linkedPages={["Services", "Projects"]} />
    </ContentWrapper>
  );
}
