import React, { useRef, useEffect } from "react";
import Typist from "react-typist";
import { Link } from "react-router-dom";
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
      .from(select("a"), 1, { x: -100, opacity: 0 })
      .from(select(".under-title"), 1, { y: -100, opacity: 0 }, "-=1")
      .from(select("img"), 1, { x: 200, opacity: 0 }, "-=1")
      .from(select("p"), 1, { opacity: 0 }, "-=0.5");
  }, []);

  return (
    <>
      <Header title={"> /home"} />
      <div className="home" ref={boxRef}>
        <img src="./media/photo-intra.png" alt="profil-picture" />
        <div className="home-main">
          <Typist avgTypingDelay={110}>
            <span className="type-title">
              {"Hello, ici "}
              <span className="type-name">{"Nathan"}</span>
            </span>
          </Typist>
          <div className="under-title">
            40+ projets complétés en moins de 2 ans
          </div>
          <p>Développeur web passionné et spécialiste en React.js,
            voilà 4 ans que je code autant en autodidacte qu'à travers plusieurs formations
            et expériences professionnelles
            Autonome et débrouillard, j'aime le challenge et
            je suis disponible à temps-plein pour concrétiser vos projets les plus ambitieux. </p>

          <Link to="/projects/all" >
            <span className="home-button">
              Mes projets
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
