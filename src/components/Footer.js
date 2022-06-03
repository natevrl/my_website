import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
      <footer className="credits">
		<div className='social-network'>
			<GitHubIcon sx={{color: "rgb(85, 85, 85)", marginRight: "10px"}}/>
			<LinkedInIcon sx={{color: "rgb(85, 85, 85)"}}/>
		</div>
        <p className="text-credits">Built and designed by nbenhado.</p>
        <p className="text-credits">All rights reserved. ©</p>
      </footer>
  );
};

export default Footer;
