import React, { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Filterbar from "../components/Filterbar";
import Header from "../components/Header";
import PhoneFilter from "../components/PhoneFilter";

export const Projects = () => {

  const [name, setName] = useState(window.location.pathname);

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