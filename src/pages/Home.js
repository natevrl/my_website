import React from 'react';
import Typist from 'react-typist';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import Header from '../components/Header';

 
const Home = () => {
	return (
		<>
			<Header title={"> /home"} />
			<div className='home'>
				<img src="./media/photo-intra.jpg" alt="profil-picture" />
				<div className='home-main'>
					<Typist avgTypingDelay={110}>
						<span className="type-title">
							{"Hello, "}
							<span className="type-name">{"Nathan"}</span>
							{" here."}
						</span>
					</Typist>
					<div className='under-title'>Completed 30+ projects in less than 1 year</div>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and orem Ipsum passages, and more recently with desktop publishing software.
					</p>

					<NavLink exact to="/creations/" activeclassname="active"><span className='home-button'>Check out my work <FaArrowRight className='icon' /></span></NavLink>
				</div>
			</div>
		</>
	);
};

export default Home;