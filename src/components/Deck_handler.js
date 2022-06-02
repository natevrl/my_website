import React from 'react';
import Card from './Card';
import dataFromDb from '../db.json'


const find_tag = (tabs, tag) => {
	var i = -1;
	while (tabs[++i])
		if (tabs[i] === tag)
			return (true);
	return (false);
}

const Deck_handler = (props) => {
		var i = -1;
		var rows = [];
		while (dataFromDb[++i])
			if (find_tag(dataFromDb[i].tag, props.tag))
				rows.push(<Card tab={dataFromDb[i]}/>);
		return (<div className="deck-contenair">{rows}</div> );
	}

export default Deck_handler;