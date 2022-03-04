import React from 'react';
import Deck_handler from '../../components/Deck_handler';
import Filterbar from '../../components/Filterbar';

const Ctf = () => {
	return (
		<div className="main-creations">
			<Filterbar />
			<Deck_handler tag="Ctf" />
		</div>
	);
};

export default Ctf;