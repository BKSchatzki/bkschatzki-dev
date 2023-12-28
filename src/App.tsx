import Starfield from "./components/Starfield";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

const App: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <Header />
      <Footer />
      <PageWrapper>
        {children}
        <Home />
        <Services />
        <Projects />
        <About />
        <Contact />
      </PageWrapper>
    </div>
  );
};

export default App;
