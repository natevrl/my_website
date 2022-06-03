import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

	const [windowSize, setWindowSize] = useState(window.innerWidth);

	useEffect(() => {

		const changeWindowSize = () => {
			setWindowSize(window.innerWidth);
		}
		window.addEventListener('resize', changeWindowSize);
		return (() => {window.removeEventListener('resize', changeWindowSize)});
	}, []);

  return (
    <>
      {windowSize < 580 ? (
        <nav className="mobile-navbar">
          <NavLink exact to="/" activeclassname="active">
            <i className="fas fa-home"></i>
          </NavLink>
          <NavLink exact to="/creations" activeclassname="active">
            <i className="fas fa-images"></i>
          </NavLink>
          <NavLink exact to="/about_me" activeclassname="navActive">
            <i className="fas fa-mountain"></i>
          </NavLink>
          <NavLink exact to="/contact" activeclassname="active">
            <i className="fas fa-address-book"></i>
          </NavLink>
        </nav>
      ) : (
        <nav className="navbar">
          <NavLink exact to="/" activeclassname="active">
            <span>/home </span>
          </NavLink>
          <NavLink exact to="/creations" activeclassname="active">
            <span>/creations </span>
          </NavLink>
          <NavLink exact to="/about_me" activeclassname="navActive">
            <span>/about_me </span>
          </NavLink>
          <NavLink exact to="/contact" activeclassname="active">
            <span>/contact </span>
          </NavLink>
        </nav>
      )}
    </>
  );
};

export default Navbar;
