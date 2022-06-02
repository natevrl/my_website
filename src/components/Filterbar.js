import React from 'react';
import { NavLink } from 'react-router-dom';

const Filterbar = () => {
	return (
		<div className='filter-bar'>
			<p>filter :</p>
			<div className="filter-categories">
				<NavLink exact to="/creations/" activeclassname="active"><span>All</span></NavLink>	
				<NavLink exact to="/creations/c" activeclassname="active"><span>C</span></NavLink>
				<NavLink exact to="/creations/cpp" activeclassname="active"><span>C++</span></NavLink>
				<NavLink exact to="/creations/reactjs" activeclassname="active"><span>React.js</span></NavLink>
				<NavLink exact to="/creations/ctf" activeclassname="active"><span>CTF</span></NavLink>
				<NavLink exact to="/creations/linux" activeclassname="active"><span>Linux</span></NavLink>
			</div>
		</div>
	);
};

export default Filterbar;