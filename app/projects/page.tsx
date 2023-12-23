"use client";

import ContentWrapper from "@/components/ContentWrapper";
import Main from "@/components/Main";
import CallToAction from "@/components/CallToAction";
import IconSpread from "@/components/IconSpread";

const Projects = () => {
  return (
    <ContentWrapper>
      <Main page="Projects" />
      <IconSpread page="Projects" />
      <CallToAction linkedPages={["Contact"]} />
    </ContentWrapper>
  );
};

export default Projects;
