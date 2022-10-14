import React from "react";
import { NavLink } from "react-router-dom";

const Filterbar = (props) => {
	return (
		<div className="filter-bar">
			<p>filter :</p>
			<div className="filter-categories">
				<NavLink to="/projects/all" activeclassname="active">
					<span>All</span>
				</NavLink>
				<NavLink to="/projects/web-mobile" activeclassname="active">
					<span>Web/Mobile</span>
				</NavLink>
				<NavLink to="/projects/c" activeclassname="active">
					<span>C</span>
				</NavLink>
				<NavLink to="/projects/unix-bash" activeclassname="active">
					<span>Unix/Bash</span>
				</NavLink>
			</div>
		</div>
	);
};

export default Filterbar;
