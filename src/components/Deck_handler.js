import React from 'react';
import Card from '../components/Card';


function find_tag(tabs, tag) {
	var i = -1;
	while (tabs[++i])
		if (tabs[i] === tag)
			return (true);
	return (false);
}

const Deck_handler = (props) => {
	
		const tab_cards = 
		[{
				id: "1",
				title: "1",
				link: "https://github.com/N4t4nis",
				tag: ["C", "All", "Linux"]
			},
			{
				id: "2",
				title: "2",
				link: "https://github.com/N4t4nis",
				tag: ["Cpp", "All", "Linux"]
			},
			{
				id: "3",
				title: "3",
				link: "https://github.com/N4t4nis",
				tag: ["Cpp", "All"]
			},
			{
				id: "4",
				title: "4",
				link: "https://github.com/N4t4nis",
				tag: ["C", "All", "Linux"]
			},
			{
				id: "5",
				title: "5",
				link: "https://github.com/N4t4nis",
				tag: ["C", "All"]
			},
			{
				id: "6",
				title: "6",
				link: "https://github.com/N4t4nis",
				tag: ["Linux", "All"]
			},
			{
				id: "7",
				title: "7",
				link: "https://github.com/N4t4nis",
				tag: ["Linux", "All"]
			},
			{
				id: "8",
				title: "8",
				link: "https://github.com/N4t4nis",
				tag: ["Reactjs", "All"]
			},
			{
				id: "9",
				title: "9",
				link: "https://github.com/N4t4nis",
				tag: ["Ctf", "All"]
			},
			{
				id: "10",
				title: "10",
				link: "https://github.com/N4t4nis",
				tag: ["C", "All"]
			},
			{
				id: "11",
				title: "11",
				link: "https://github.com/N4t4nis",
				tag: ["Reactjs", "All"]
			},
			{
				id: "12",
				title: "12",
				link: "https://github.com/N4t4nis",
				tag: ["C", "All"]
			},
			{
				id: "13",
				title: "13",
				link: "https://github.com/N4t4nis",
				tag: ["C", "All"]
			},
			{
				id: "14",
				title: "14",
				link: "https://github.com/N4t4nis",
				tag: ["C", "All"]
			},
			{
				id: "15",
				title: "15",
				link: "https://github.com/N4t4nis",
				tag: ["C", "All"]
			},
			{
				id: "16",
				title: "16",
				link: "https://github.com/N4t4nis",
				tag: ["Linux", "All"]
			},
			{
				id: "17",
				title: "17",
				link: "https://github.com/N4t4nis",
				tag: ["C", "All"]
			},
			{
				id: "18",
				title: "18",
				link: "https://github.com/N4t4nis",
				tag: ["C", "All"]
			}]

		var i = -1;
		var rows = [];
		while (tab_cards[++i])
		{
			if (find_tag(tab_cards[i].tag, props.tag))
				rows.push(<Card tab={tab_cards[i]}/>);
		}
		return (<div className="deck-contenair">{rows}</div> );
	}

export default Deck_handler;