import React, { Component } from 'react';
import Card from '../components/Card';
import Slideshow from '../components/Slideshow';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


export default class Creations extends Component {
  
	
	state =  {
		tab_cards: [
		[{
				id: "1",
				title: "test1111",
				link: "https://github.com/N4t4nis"
			},
			{
				id: "2",
				title: "test2222",
				link: "https://github.com/N4t4nis"
			},
			{
				id: "3",
				title: "drgdrg",
				link: "https://github.com/N4t4nis"
			}],
			[{
				id: "1",
				title: "test4444",
				link: "https://github.com/N4t4nis"
			},
			{
				id: "2",
				title: "test5555",
				link: "https://github.com/N4t4nis"
			},
			{
				id: "3",
				title: "drgdrg",
				link: "https://github.com/N4t4nis"
			}]
		],



	}

	Iter = () => {
		var i = 0;
		var rows = []
		while (this.state.tab_cards[0][i])
		{
			rows.push(<Card tab={this.state.tab_cards[0][i]}/>)
			console.log(this.state.tab_cards[0][i].id);
			i++;
		}
		return (rows);
	}
	Iter2 = () => {
		var i = 0;
		var rows = []
		while (this.state.tab_cards[1][i])
		{
			rows.push(<Card tab={this.state.tab_cards[1][i]}/>)
			console.log(this.state.tab_cards[1][i].id);
			i++;
		}
		return (rows);
	}
	render() {
	return (
			<div className='creations'>
				{/* <Card tab={this.state.tab_cards[0]}/> */}
				<Carousel>
					<this.Iter />
					<this.Iter2 />
				</Carousel>

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
