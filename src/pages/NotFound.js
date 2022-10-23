import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

	const navigate = useNavigate();

	return (
		<div className='notfound-contenair'>
			<h1>404 NOT FOUND</h1>
			<button onClick={() => navigate("/")}>Retourner a l'accueil</button>
		</div>
	);
};

export default NotFound;