import React, { useRef, useEffect } from "react";
import Typist from "react-typist";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Header from "../components/Header";
import "react-typist/dist/Typist.css";
import { gsap } from "gsap";

const Home = () => {
  const boxRef = useRef();
  const select = gsap.utils.selector(boxRef);
  const timeline = useRef();

  useEffect(() => {
    timeline.current = gsap
      .timeline()
      .from(select(".home-button"), 1, { x: -100, opacity: 0 })
      .from(select(".under-title"), 1, { y: -100, opacity: 0 }, "-=1")
      .from(select("img"), 1, { x: 200, opacity: 0 }, "-=1")
      .from(select("p"), 1, { opacity: 0 }, "-=0.5");
  }, []);

  return (
    <>
      <Header title={"> /home"} />
      <div className="home" ref={boxRef}>
        <img src="./media/photo-intra.jpg" alt="profil-picture" />
        <div className="home-main">
          <Typist avgTypingDelay={110}>
            <span className="type-title">
              {"Hello, "}
              <span className="type-name">{"Nathan"}</span>
              {" here."}
            </span>
          </Typist>
          <div className="under-title">
            Completed 30+ projects in less than 1 year
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. When an unknown printer took a galley of type and orem
            Ipsum passages, and more recently with desktop publishing software.
          </p>

          <NavLink exact to="/projects/" activeclassname="active">
            <span className="home-button">
              Check out my work <FaArrowRight className="icon" />
            </span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
