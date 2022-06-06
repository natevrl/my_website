import React, { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Deck_handler from "../components/Deck_handler";
import Filterbar from "../components/Filterbar";
import Header from "../components/Header";
import PhoneFilter from "../components/PhoneFilter";

// export const C = () => {
//   return (
//       <div className="main-projects">
//         <Deck_handler tag="C" />
//       </div>
//   );
// };

// export const Reactjs = () => {
//   return (
//       <div className="main-projects">
//         <Deck_handler tag="Reactjs" />
//       </div>
//   );
// };

// export const Ctf = () => {
//   return (
//       <div className="main-projects">
//         <Deck_handler tag="Ctf" />
//       </div>
//   );
// };

// export const Cpp = () => {
//   return (
//       <div className="main-projects">
//         <Deck_handler tag="Cpp" />
//       </div>
//   );
// };

// export const Linux = () => {
//   console.log("OUUI")
//   return (
//       <div className="main-projects">
//         <Deck_handler tag="Linux" />
//       </div>
//   );
// };

export const Projects = () => {

  const [name, setName] = useState(window.location.pathname);

  // console.log(name)

  return (
    <>
    
      <Header title={"> " + name} />
      <div className="main-projects">
        <PhoneFilter />
        <Filterbar />
      <Outlet context={[name, setName]}/>
      </div>
    </>
  );
};

export default Projects;