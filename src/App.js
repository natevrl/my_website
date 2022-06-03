import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import All from "./pages/creations/All";
import About_me from "./pages/About_me";
import Contact from "./pages/Contact";
import Not_found from "./pages/Not_found";
import C from "./pages/creations/C";
import Ctf from "./pages/creations/Ctf";
import Linux from "./pages/creations/Linux";
import Reactjs from "./pages/creations/Reactjs";
import Cpp from "./pages/creations/Cpp";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creations" element={<All />} />
        <Route path="/creations/c" element={<C />} />
        <Route path="/creations/cpp" element={<Cpp />} />
        <Route path="/creations/reactjs" element={<Reactjs />} />
        <Route path="/creations/ctf" element={<Ctf />} />
        <Route path="/creations/linux" element={<Linux />} />
        <Route path="/about_me" element={<About_me />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Not_found />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
