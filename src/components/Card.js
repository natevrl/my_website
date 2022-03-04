import React from 'react';

//mode function
function Card(props) {
	return (
	<div className="card-contenair" key={props.tab.id}>
		<div className='card-title'>{props.tab.title}</div>
		<div className='card-description'>Recreate the fonctionement of bash shell by executing command, handling signals, redir... </div>
		<a href={props.tab.link} rel="noopener noreferrer" target="_blank"><i className='fas fa-github'></i></a>
	</div>
	);
}

export default Card;