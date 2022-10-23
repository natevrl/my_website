import Header from "../components/Header";
import React, { Component } from "react";
import { Link } from "react-router-dom";

function AboutMe() {

  const BASE_PATH = "/media/";
  const skillsArr = [
    { name: "javascript", url: "js.png" },
    { name: "bash", url: "bash.png" },
    { name: "css", url: "css.png" },
    { name: "html", url: "html.png" },
    { name: "c", url: "c.png" },
    { name: "react", url: "react.png" },
    { name: "git", url: "git.png" },
    { name: "firebase", url: "firebase.png" },
    { name: "redux", url: "redux.png" },
    { name: "sass", url: "sass.png" },
    { name: "unix", url: "unix.png" },
    { name: "vscode", url: "vscode.png" },
  ];

  const t1 = <p>Mes piliers pour la conception de vos sites web sur-mesure : <br />
    <br />🎨 <b>modern & design :</b> <span> aujourd'hui, l'esthétique et l'expérience utilisateur
      sont primordiales pour toute entreprise (diplômé d'un bac pro Design Graphique,
      développer des sites web avec une véritable identité graphique est au cœur de mes préoccupations)</span>
    <br />⚡ <b>rapide, optimisé et sécurisé :</b> je code toujours avec énormément de rigueur.
    En partie grâce à l'école 42 où 1 bug , 1 fuite de mémoire, 1 fonction mal protégée = 0/20, on recommence tout</p>;

  const t2 = <p>Mise à part mon attrait pour le web et React.js,
    j'ai passé plus d'un an à coder en C afin d'apprendre
    et de comprendre l'informatique à ses niveaux les plus bas
    et j'aspire à devenir pleinement Fullstack.</p>;

  const techItems = skillsArr.map(function (skill, index) {
    console.log(skill);
    return <div className="one-skill">
      <li key={index}>
        <img className="skill-img" src={BASE_PATH + skill.url} alt={skill.name} />
      </li>
      <div className="hover-skill-number"><p>{skill.name}</p></div>
    </div>;
  });

  return (
    <>
      <Header title={"> " + window.location.pathname} />
      <div className="about-contenair">
        <div className="about-text">
          {t1}
          {t2}
          <Link to="/contact" >
            <span className="home-button">
              Me contacter
            </span>
          </Link>
        </div>
        <div className="skills-contenair">
          <h1 className="skills-title">SKILLS</h1>
          <ul className="skills">{techItems}</ul>
        </div>
      </div>
    </>
  );
};

export default AboutMe;