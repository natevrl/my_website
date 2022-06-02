import React from 'react';
import Navbar from './Navbar';

const Header = (props) => {
	return (
		<div className="header-contenair">
			<div className='header_title'>
				{props.title}
			</div>
      		<Navbar />		
		</div>

	);
}

export default Header;
