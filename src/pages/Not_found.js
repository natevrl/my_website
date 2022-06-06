import React from 'react';
import { useNavigate } from 'react-router-dom';

const Not_found = () => {

	const navigate = useNavigate();

	return (
		<div>
			<h1>404 NOT FOUND</h1>
			<button onClick={() => navigate("/")}>Retourner a l'accueil</button>
		</div>
	);
};

export default Not_found;