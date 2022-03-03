import React from 'react';
import Typist from 'react-typist';


const Home = () => {
	return (
		<div className='home'>
			<div className='home-title'>
				<Typist avgTypingDelay={110}>
					<span className="type-title">
						{"Hello, "}
						<span className="type-name">{"Nathan"}</span>
						{" here."}
					</span>
				</Typist>
			</div>

			<div className='home-main'>
				<div className='home-text'>
					<div className='under-title'>Completed 30+ projects in less than 1 year</div>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and orem Ipsum passages, and more recently with desktop publishing software.
				</div>
				<img src="./media/photo-intra.jpg" alt="profil-picture" />
			</div>
		</div>
	);
};

export default Home;