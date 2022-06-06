import React, { useEffect } from 'react';
import Card from './Card';
import dataFromDb from '../db.json'
import Header from './Header';
import { useOutletContext } from 'react-router-dom';

const Deck_handler = (props) => {

	const [name, setName] = useOutletContext();

	// useEffect(() => {
	// 	setName(window.location.pathname)
	// }, [name]);
	setName(window.location.pathname)

	console.log(name);
	var i = -1;
	var rows = [];

	const find_tag = (tabs, tag) => {
		var i = -1;
		while (tabs[++i])
			if (tabs[i] === tag)
				return (true);
		return (false);
	}

	while (dataFromDb[++i])
		if (find_tag(dataFromDb[i].tag, props.tag))
			rows.push(<Card tab={dataFromDb[i]}/>);

	return (
		<>
			<div className="deck-contenair">
				{rows}
			</div> 	
		</>
	);
}

export default Deck_handler;