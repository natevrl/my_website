import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Projects } from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import DeckHandler from "./components/DeckHandler";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/" element={<Projects />}>
          <Route path="/projects/all" element={<DeckHandler tag="All" />} />
          <Route path="/projects/c" element={<DeckHandler tag="C" />} />
          <Route path="/projects/unix" element={<DeckHandler tag="Unix/Bash" />} />
          <Route path="/projects/web" element={<DeckHandler tag="Web" />} />
        </Route>
        <Route path="/about_me" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
