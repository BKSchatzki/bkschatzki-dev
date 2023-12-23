"use client";

import ContentWrapper from "@/components/ContentWrapper";
import Main from "@/components/Main";
import CallToAction from "@/components/CallToAction";
import IconTicker from "@/components/IconTicker";

const Projects = () => {
  return (
    <ContentWrapper>
      <Main page="Projects" />
      <IconTicker />
      <CallToAction linkedPages={["Contact"]} />
    </ContentWrapper>
  );
};

export default Projects;
