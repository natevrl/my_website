import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='navigation'>
				<NavLink exact to="/" activeClassName="active">
					{/* importe licone de fontawesome */}
					{/* <i className='fas fa-home'> */}
						<span>/home </span>
					{/* </i> */}
				</NavLink>

				<NavLink exact to="/about" activeClassName="navActive">
					{/* <i className='fas fa-mountain'> */}
						<span>/about_me </span>
					{/* </i> */}
				</NavLink>

				<NavLink exact to="/creations" activeClassName="active">
					{/* importe licone de fontawesome */}
					{/* <i className='fas fa-images'> */}
						<span>/creations </span>
					{/* </i> */}
				</NavLink>

				<NavLink exact to="/contact" activeClassName="active">
					{/* importe licone de fontawesome */}
					{/* <i className='fas fa-address-book'> */}
						<span>/contact </span>
					{/* </i> */}
				</NavLink>
			</div>

			{/* <div className='socialNetwork'>
					<a href="https://github.com/N4t4nis"><i className='fas fa-github'></i></a>
					<a href="https://www.linkedin.com/"><i className='fas fa-linkedin'></i></a>
					<a href="https://tryhackme.com/"><i className="fas fa-robot"></i></a>
			</div> */}

		</div>
	);
};

export default Navbar;