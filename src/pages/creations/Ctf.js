import React from 'react';
import Deck_handler from '../../components/Deck_handler';
import Filterbar from '../../components/Filterbar';
import Header from '../../components/Header';

const Ctf = () => {
	return (
		<div className="main-contenair">
		<Header title={"> " + window.location.pathname}/>
		<div className="main-creations">
			<Filterbar />
			<Deck_handler tag="Ctf" />
		</div>
		</div>
	);
};

export default Ctf;