import React, { Component } from 'react';
import Card from '../components/Card';
// import Slideshow from '../components/Slideshow';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


export default class Creations extends Component {
  
	
	state =  {
		tab_cards: [
		[{
				id: "1",
				title: "1",
				link: "https://github.com/N4t4nis"
			},
			{
				id: "2",
				title: "2",
				link: "https://github.com/N4t4nis"
			},
			{
				id: "3",
				title: "3",
				link: "https://github.com/N4t4nis"
			}],
			[{
				id: "4",
				title: "4",
				link: "https://github.com/N4t4nis"
			},
			{
				id: "5",
				title: "5",
				link: "https://github.com/N4t4nis"
			},
			{
				id: "6",
				title: "6",
				link: "https://github.com/N4t4nis"
			}],
			[{
				id: "7",
				title: "7",
				link: "https://github.com/N4t4nis"
			},
			{
				id: "8",
				title: "8",
				link: "https://github.com/N4t4nis"
			},
			{
				id: "9",
				title: "9",
				link: "https://github.com/N4t4nis"
			}],
			[{
				id: "10",
				title: "10",
				link: "https://github.com/N4t4nis"
			},
			{
				id: "11",
				title: "11",
				link: "https://github.com/N4t4nis"
			},
			{
				id: "12",
				title: "12",
				link: "https://github.com/N4t4nis"
			}],
			[{
				id: "13",
				title: "13",
				link: "https://github.com/N4t4nis"
			},
			{
				id: "14",
				title: "14",
				link: "https://github.com/N4t4nis"
			},
			{
				id: "15",
				title: "15",
				link: "https://github.com/N4t4nis"
			}],
			[{
				id: "16",
				title: "16",
				link: "https://github.com/N4t4nis"
			},
			{
				id: "17",
				title: "17",
				link: "https://github.com/N4t4nis"
			},
			{
				id: "18",
				title: "18",
				link: "https://github.com/N4t4nis"
			}],
			
		],



	}

	Create_deck = (props) => {
		var i = -1;
		var rows = []
		while (this.state.tab_cards[props.index][++i])
			rows.push(<Card tab={this.state.tab_cards[props.index][i]}/>)
		return (<div className="deck-colums">{rows}</div> );
	}

	render() {
	return (

		<div className="deck-contenair">
			<this.Create_deck index="0"/>
			<this.Create_deck index="1"/>
			{/* <this.Create_deck index="2"/>
			<this.Create_deck index="3"/> */}
		</div>
	);
  }
}

// {this.state.tab_cards.map((slide, i) => (
	// <Card tab={this.state.tab_cards[i][0]}/>
		// )
	// )
// }

		// <div className='home-title'>/creations</div>
