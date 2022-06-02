import React from 'react';
import Deck_handler from '../../components/Deck_handler';
import Filterbar from '../../components/Filterbar';
import Header from '../../components/Header';
import CustomizedMenus from '../../components/PhoneMenu';

const Ctf = () => {
	return (
		<div className="main-contenair">
		<Header title={"> " + window.location.pathname}/>
		<div className="main-creations">
			<CustomizedMenus/>
			<Filterbar />
			<Deck_handler tag="Ctf" />
		</div>
		</div>
	);
};

export default Ctf;