import React, {useRef, useEffect} from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import gsap from "gsap";


function Card({item}) {

	function setColor(li) {
		if (li === "C") return {color: "#8338ec"};
		if (li === "Unix/Bash") return {color: "#ff006e"};
		if (li === "Web/Mobile") return {color: "#ffbe0b"};
	}

	return (
		<div className="card-contenair" key={item.id}>
			<h4 className="card-title">{item.title}</h4>
			<p className="card-description">{item.description}</p>
			<a href={item.link} rel="noopener noreferrer" target="_blank">
				<GitHubIcon />
			</a>
			<ul className="card-tags">
				{item.tags.map((tag, i) => 
					<li className="tags-item" 
						key={i} 
						style={setColor(tag)}>
						{tag !== "All" && tag}
						{item.tags[i+1] && item.tags[i-1] && ','}
					</li>)}
			</ul>
		</div>
	);
}

export default Card;
