import React from "react";
import { Slide } from 'react-slideshow-image'

const proprietes = {
	duration: 5000,
	transitionDuration: 500,
	infinite: true,
	indicators: true,
	arrow: true,
}

const Slideshow = () => {
	return (
		<div className='slide-contenair'>
			<Slide {...proprietes}>
				<div className="each-slide">
					<div>
						<img src="./media/project1.JPG" alt="img1" />
					</div>
				</div>
				<div className="each-slide">
					<div>
						<img src="./media/project2.JPG" alt="img2" />
					</div>
				</div>
				<div className="each-slide">
					<div>
						<img src="./media/project3.JPG" alt="img3" />
					</div>
				</div>
			</Slide>
		</div>
	)
}

export default Slideshow;
