import Header from "../components/Header";
import React, { Component } from "react";

export default class AboutMe extends Component {
	render() {
		const skills_array = ["C", "C++", "Bash/linux", "React.js", "HTML & CSS"];
		const tech_items = skills_array.map(function (skill, index) {
			return <li key={index}>{skill}</li>;
		});
		return (
			<>
				<Header title={"> " + window.location.pathname} />
				<div className="about-content">
					<div className="about-text">
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Dignissimos incidunt soluta excepturi? Tempora, hic laboriosam vel
							doloribus ullam voluptatum facere cupiditate qui harum aliquam
							repudiandae quaerat voluptatem accusantium esse dignissimos?
						</p>
						<p>Technologies i'm used to use for ma projects :</p>
					</div>
					<ul>{tech_items}</ul>
					<div className="about-skills"></div>
				</div>
			</>
		);
	}
}
