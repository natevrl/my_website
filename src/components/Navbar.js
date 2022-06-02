import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='navbar'>
				<NavLink exact to="/" activeclassname="active">
					{/* importe licone de fontawesome */}
					{/* <i className='fas fa-home'> */}
						<span>/home </span>
					{/* </i> */}
				</NavLink>

		

				<NavLink exact to="/creations" activeclassname="active">
					{/* importe licone de fontawesome */}
					{/* <i className='fas fa-images'> */}
						<span>/creations </span>
					{/* </i> */}
				</NavLink>

				<NavLink exact to="/about_me" activeclassname="navActive">
					{/* <i className='fas fa-mountain'> */}
						<span>/about_me </span>
					{/* </i> */}
				</NavLink>

				<NavLink exact to="/contact" activeclassname="active">
					{/* importe licone de fontawesome */}
					{/* <i className='fas fa-address-book'> */}
						<span>/contact </span>
					{/* </i> */}
				</NavLink>
			{/* <div className='socialNetwork'>
					<a href="https://github.com/N4t4nis"><i className='fas fa-github'></i></a>
					<a href="https://www.linkedin.com/"><i className='fas fa-linkedin'></i></a>
					<a href="https://tryhackme.com/"><i className="fas fa-robot"></i></a>
			</div> */}

		</div>
	);
};

export default Navbar;