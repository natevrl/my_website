import React from 'react';
import { NavLink } from 'react-router-dom';

const Filterbar = () => {
	return (
		<div className='filter-bar'>
			<p>filter : </p>
			<NavLink exact to="/creations/" activeClassName="active"><span>All</span></NavLink>	
			<NavLink exact to="/creations/c" activeClassName="active"><span>C</span></NavLink>
			<NavLink exact to="/creations/cpp" activeClassName="active"><span>C++</span></NavLink>
			<NavLink exact to="/creations/reactjs" activeClassName="active"><span>React.js</span></NavLink>
			<NavLink exact to="/creations/ctf" activeClassName="active"><span>CTF</span></NavLink>
			<NavLink exact to="/creations/linux" activeClassName="active"><span>Linux</span></NavLink>
		</div>
	);
};

export default Filterbar;