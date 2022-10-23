import React, { useEffect } from "react";
import Card from "./Card";
import ProjectsDb from "../data/projectsDb";
import { useOutletContext } from "react-router-dom";

const find_tag = (tabs, tag) => {
	var i = -1;
	while (tabs[++i]) if (tabs[i] === tag) return true;
	return false;
};

const DeckHandler = (props) => {
	const [name, setName] = useOutletContext();
	var i = -1;
	var rows = [];

	useEffect(() => {
		setName(window.location.pathname);
	}, [rows]);

	while (ProjectsDb[++i])
		if (find_tag(ProjectsDb[i].tags, props.tag))
			rows.push(<Card key={ProjectsDb[i].id} item={ProjectsDb[i]} id={i}/>);

	return <div className="deck-contenair">{rows}</div>;
};

export default DeckHandler;
