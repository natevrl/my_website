import React, { Component } from 'react';
import { NULL } from 'sass';
import Card from '../components/Card';


export default class Creations extends Component {
  
	state =  {
		tab_cards: [
			{
				id: "1",
				title: "test1111",
				link: "https://github.com/N4t4nis"
			},
			{
				id: "2",
				title: "test2222",
				link: "https://github.com/N4t4nis"
			}
		]
	}
	
	// Iter = () => {
	// 	var i = 0;
	// 	while (i < 2)
	// 	{
	// 		<Card tab={this.state.tab_cards[i]}/>
	// 		console.log(this.state.tab_cards[i].title);
	// 		i++;
	// 	}
	// 	return (null)
	// }
	render() {
	return (
			<div className='creations'>
				{/* <Card tab={this.state.tab_cards[0]}/> */}
				{/* <this.Iter/> */}
			</div>
	);
  }
}


		// <div className='home-title'>/creations</div>
