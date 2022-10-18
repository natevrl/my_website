import React, {useRef, useEffect} from "react";
import GitHubIcon from "@mui/icons-material/GitHub";


function Card({item}) {

	function setColor(li, index) {
		if (li === "C")
			return item.tags[index+1] ? {color: "#8338ec", marginRight:"6px"} : {color: "#8338ec"};
    if (li === "Unix/Bash")
			return item.tags[index+1] ? {color: "#ff006e", marginRight:"6px"} : {color: "#ff006e"};
    if (li === "Web")
        return item.tags[index+1] ? {color: "#ffbe0b", marginRight:"6px"} : {color: "#ffbe0b"};
    return(null);
	}

	return (
		<div className="card-contenair" key={item.id}>
			<div className="card-header">
				<h4 className="card-title">{item.title}</h4>
				<p className="card-tags">
					{item.tags.map((tag, i) => 
					<li className="tags-item" 
						key={i} 
						style={setColor(tag, i)}>
						{tag !== "All" && tag}
						{item.tags[i+1] && item.tags[i-1] && <span style={{color:"rgb(85, 85, 85)", fontSize:"12px"}}>,</span>}
					</li>)}
				</p>
			</div>
			<p className="card-description">{item.description}</p>
			<a href={item.link} rel="noopener noreferrer" target="_blank">
				<GitHubIcon />
			</a>
			<ul className="card-stack">
					{item.stack.map((stuff, i) => 
					<li className="stack-item" 
						key={i}>
						{stuff}
						{item.stack[i+1] && ','}
					</li>)}
					
			</ul>
		</div>
	);
}

export default Card;
