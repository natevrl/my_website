import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='sidebar'>
			<div className='navigation'>
				<NavLink exact to="/" activeClassName="navcAtive">
					{/* importe licone de fontawesome */}
					<i className='fas fa-home'>
						<span> /home</span>
					</i>
				</NavLink>



				<NavLink
					to="/about"
					activeStyle={{
						fontWeight: "bold",
						color: "red"
					}}
					>
					FAQs
					</NavLink>


				{/* <NavLink exact to="/about" activeClassName="navActive">
					<i className='fas fa-mountain'>
						<span> /about me</span>
					</i>
				</NavLink> */}

				<NavLink exact to="/creations" activeClassName="navActive">
					{/* importe licone de fontawesome */}
					<i className='fas fa-images'>
						<span> /creations</span>
					</i>
				</NavLink>

				<NavLink exact to="/contact" activeClassName="navActive">
					{/* importe licone de fontawesome */}
					<i className='fas fa-address-book'>
						<span> /contact</span>
					</i>
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