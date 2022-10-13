import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

function Card({item}) {

	function setColor(li) {
		if (li === "C") return {color: "#8338ec"};
		if (li === "Linux") return {color: "#ff006e"};
		if (li === "Cpp") return {color: "#3a86ff"};
		if (li === "html_css") return {color: "#fb5607"};
		if (li === "Reactjs") return {color: "#ffbe0b"};
	}

	return (
		<div className="card-contenair" key={item.id}>
			<h4 className="card-title">{item.title}</h4>
			<p className="card-description">
				Recreate the fonctionement of bash shell by executing command, handling
				signals, redir...{" "}
			</p>
			<a href={item.link} rel="noopener noreferrer" target="_blank">
				<GitHubIcon />
			</a>
			<ul className="card-tags">
				{item.tags.map((li, i) => 
					<li className="tags-item" 
						key={i} 
						style={setColor(li)}>
						{li !== "All" && li}
						{item.tags[i+1] && item.tags[i-1] && ','}
					</li>)}
			</ul>
		</div>
	);
}

export default Card;
