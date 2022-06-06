import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import {Projects, C, Cpp, Reactjs, Linux, Ctf} from "./pages/Projects";
import About_me from "./pages/About_me";
import Contact from "./pages/Contact";
import Not_found from "./pages/Not_found";
import Footer from "./components/Footer";
import Deck_handler from "./components/Deck_handler";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/" element={<Projects />}>
          <Route path="/projects/c" element={<Deck_handler tag="C"/>} />
          <Route path="/projects/cpp" element={<Deck_handler tag="Cpp"/>} />
          <Route path="/projects/reactjs" element={<Deck_handler tag="Reactjs"/>} />
          <Route path="/projects/ctf" element={<Deck_handler tag="Ctf"/>} />
          <Route path="/projects/linux" element={<Deck_handler tag="Linux"/>} />
        </Route>
        <Route path="/about_me" element={<About_me />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Not_found />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
