import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
      <footer className="credits">
		<div className='social-network'>
      <a href="https://github.com/natevrl" rel="noopener noreferrer" target="_blank">
			<GitHubIcon sx={{color: "rgb(85, 85, 85)", '&:hover':{color:"#771e1e"}}}/>
      </a>
      <div style={{width:"10px"}}></div>
      <a href="https://linkedin.com" rel="noopener noreferrer" target="_blank">
        <LinkedInIcon sx={{color: "rgb(85, 85, 85)", '&:hover':{color:"#eeeeee"}}}/>
      </a>

		</div>
        <p className="text-credits">Built and designed by nbenhado.</p>
        <p className="text-credits">All rights reserved. ©</p>
      </footer>
  );
};

export default Footer;
