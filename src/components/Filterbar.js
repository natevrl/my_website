import React from 'react';
import { NavLink } from 'react-router-dom';

const Filterbar = (props) => {

	return (
		<div className='filter-bar'>
			<p>filter :</p>
			<div className="filter-categories">
				<NavLink to="/projects/" 
				activeclassname="active"><span>All</span></NavLink>	
				<NavLink to="/projects/c" 
				activeclassname="active"><span>C</span></NavLink>
				<NavLink to="/projects/cpp" 
				activeclassname="active"><span>C++</span></NavLink>
				<NavLink to="/projects/reactjs" activeclassname="active"><span>React.js</span></NavLink>
				<NavLink to="/projects/ctf" activeclassname="active"><span>CTF</span></NavLink>
				<NavLink to="/projects/linux" activeclassname="active"><span>Linux</span></NavLink>
			</div>
		</div>
	);
};

export default Filterbar;