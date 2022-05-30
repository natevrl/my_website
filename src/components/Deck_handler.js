import React from 'react';
import Card from './Card';
import data from '../db.json'


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
		while (data[++i])
			if (find_tag(data[i].tag, props.tag))
				rows.push(<Card tab={data[i]}/>);
		return (<div className="deck-contenair">{rows}</div> );
	}

export default Deck_handler;