import React, { Component } from 'react';

export default class Card extends Component {
  render() {
	return (
	<div className="card-contenair" key={this.props.tab.id}>
		<div className='card-title'>{this.props.tab.title}</div>
		<div className='card-description'>Recreate the fonctionement of bash shell by executing command, handling signals, redir... </div>
		<a href={this.props.tab.link} rel="noopener noreferrer" target="_blank"><i className='fas fa-github'></i></a>
	</div>
	);
  };
}


// itere sur chaque element du tableau que le parent a donne
// return this.props.tab.map((tab) =>
// <div className="card-contenair" key={tab.id}>
// 	<div className='card-title'>{tab.title}</div>
// 	<div className='card-description'>Recreate the fonctionement of bash shell by executing command, handling signals, redir... </div>
// 	<a href={tab.link} rel="noopener noreferrer" target="_blank"><i className='fas fa-github'></i></a>
// </div>
