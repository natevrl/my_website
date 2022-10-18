import Header from "../components/Header";
import React, { Component } from "react";

export default class AboutMe extends Component {
	render() {
		const BASE_PATH = "/media/"
		const skillsArr = [
			{name: "javascript", url: "js.png"}, 
			{name: "bash", url: "bash.png"},
			{name: "css", url: "css.png"},
			{name: "html", url: "html.png"},
			{name: "c", url: "c.png"},
			{name: "react", url: "react.png"},
			{name: "reactnative", url: "reactnative.png"},
			{name: "git", url: "git.png"},
			{name: "firebase", url: "firebase.png"},
			{name: "redux", url: "redux.png"},
			{name: "sass", url: "sass.png"},
			{name: "unix", url: "unix.png"},
			{name: "vscode", url: "vscode.png"},
		];
		
		const techItems = skillsArr.map(function (skill, index) {
			console.log(skill);
			return <div className="one-skill">			
					<li  key={index}>
						<img className="skill-img" src={BASE_PATH + skill.url} alt={skill.name}/>
					</li>
						<div className="hover-skill-number"><p>100%</p></div>
				</div>;
			});
		return (
			// description sur moi, copywriting
			// skills
			// CTA projets ou contact
			<>
				<Header title={"> " + window.location.pathname} />
				<div className="about-contenair">
					<div className="about-text">
						<p>
							- WIIFM : Justifier chaque affirmation par ce qu'ils vont y gagner
							- developpeur web/mobile
							- passionne de cybersec
							- jai fais 1 an de C donc techniquement je suis trop fort, je connais les fondamentaux du developpement informatique (memoire, : donc je code vos applications ultra opti, sans lag pointeur, structure de donnees, binaire/compilation)
							- j'ai appris en autonomie total sans profs, je sais me debrouiller sur internet,
							- j'ai toujours soif d'apprendre et aucun probleme ne me fait peur
							- je sais travailler en equipe
							- jai ete dans la meilleure ecole IT de france
							- Vous êtes la génération Z : le numérique, vous êtes nés dedans, et pour vous, c'est naturel !
		
						</p>
					</div>
					<div className="skills-contenair">
						<h1 className="skills-title">SKILLS</h1>
						<ul className="skills">{techItems}</ul>
					</div>
				</div>
			</>
		);
	}
}
