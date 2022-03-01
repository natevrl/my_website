import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='sidebar'>
			<div className='id'>
				<div className='id-content'>
					<img src="./media/photo-intra.jpg" alt="profil-pic" />
					<h3>nbenhado</h3>
				</div>
			</div>

			<div className='navigation'>
				<ul>

					<li>
						<NavLink exact to="/" activeClassName="navAtive">
							{/* importe licone de fontawesome */}
							<i className='fas fa-home'>
								<span>home</span>
							</i>
						</NavLink>
					</li>

					<li>
						<NavLink exact to="/about" activeClassName="navAtive">
							{/* importe licone de fontawesome */}
							<i className='fas fa-mountain'>
								<span>about me</span>
							</i>
						</NavLink>
					</li>

					<li>
						<NavLink exact to="/creations" activeClassName="navAtive">
							{/* importe licone de fontawesome */}
							<i className='fas fa-images'>
								<span>creations</span>
							</i>
						</NavLink>
					</li>

					<li>
						<NavLink exact to="/contact" activeClassName="navAtive">
							{/* importe licone de fontawesome */}
							<i className='fas fa-address-book'>
								<span>contact</span>
							</i>
						</NavLink>
					</li>
				</ul>
			</div>

			<div className='social'>

					<a href="https://github.com/N4t4nis"><i className='fas fa-github'></i></a>
					<a href="https://www.linkedin.com/"><i className='fas fa-linkedin'></i></a>
					<a href="https://tryhackme.com/"><i className="fas fa-robot"></i></a>
			</div>

		</div>
	);
};

export default Navbar;