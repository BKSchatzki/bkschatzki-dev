import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Starfield from "./components/Starfield";
import Header from "./components/Header";
import PageWrapper from "./components/PageWrapper";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Success from "./pages/Success";

const App = () => {
  return (
    <Router>
      <Starfield
        backgroundColor="black"
        speedFactor={0.05}
        starColor={[255, 255, 255]}
        starCount={1000}
      />
      <Header />
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </PageWrapper>
    </Router>
  );
};

export default App;
