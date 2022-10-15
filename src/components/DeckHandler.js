import React, { useEffect } from "react";
import Card from "./Card";
import dataFromDb from "../db";
// import { useOutletContext } from "react-router-dom";

const find_tag = (tabs, tag) => {
	var i = -1;
	while (tabs[++i]) if (tabs[i] === tag) return true;
	return false;
};

const DeckHandler = (props) => {
	// const [name, setName] = useOutletContext();
	var i = -1;
	var rows = [];

	// useEffect(() => {
	// 	setName(window.location.pathname);
	// }, [rows]);

	while (dataFromDb[++i])
		if (find_tag(dataFromDb[i].tags, props.tag))
			rows.push(<Card key={dataFromDb[i].id} item={dataFromDb[i]} id={i}/>);

	return <div className="deck-contenair">{rows}</div>;
};

export default DeckHandler;
