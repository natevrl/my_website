import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import {All, C, Cpp, Reactjs, Linux, Ctf} from "./pages/Projects";
import About_me from "./pages/About_me";
import Contact from "./pages/Contact";
import Not_found from "./pages/Not_found";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<All />} />
        <Route path="/projects/c" element={<C />} />
        <Route path="/projects/cpp" element={<Cpp />} />
        <Route path="/projects/reactjs" element={<Reactjs />} />
        <Route path="/projects/ctf" element={<Ctf />} />
        <Route path="/projects/linux" element={<Linux />} />
        <Route path="/about_me" element={<About_me />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Not_found />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
