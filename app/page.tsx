import Main from "@/components/Main";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen w-11/12 max-w-3xl flex-col items-center justify-center">
      <Main page="Home" />
      <CallToAction linkedPages={["Services", "Projects"]} />
    </div>
  );
}
