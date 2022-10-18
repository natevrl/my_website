import React, { useState, useEffect, useRef} from "react";
import { Outlet } from "react-router-dom";
import Filterbar from "../components/Filterbar";
import Header from "../components/Header";
import PhoneFilter from "../components/PhoneFilter";
import gsap from "gsap";

export const Projects = () => {

  const [name, setName] = useState(window.location.pathname);
	const boxRef = useRef();
	const select = gsap.utils.selector(boxRef);
	const timeline = useRef();
  
	useEffect(() => {
	  timeline.current = gsap
		.timeline()
		.from(select(".filter-bar"), 1, { x: -100, direction:"up", opacity: 0 })
		.from(select("li"), 1, { x: 200, opacity: 0 }, "-=1")
		.from(select(".card-title"), 1, { opacity: 0 }, "-=0.5");
	}, []);
  return (
    <>
      <Header title={"> " + name} />
      <div className="main-projects" ref={boxRef}>
        <PhoneFilter />
        <Filterbar />
        <Outlet context={[name, setName]}/>
      </div>
    </>
  );
};

export default Projects;