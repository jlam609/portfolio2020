import React from "react";
import { IconButton, Tooltip, Typography } from "@material-ui/core";
import ReactTypingEffect from "react-typing-effect";
import { LightSpeed } from "react-reveal";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from '@material-ui/icons/Instagram';
import { personalData } from "../resumedata";

const Home: React.FC = () => {
  return (
    <LightSpeed left>
      <div className="home-text">
        <img
          src="https://ca.slack-edge.com/T024FPYBQ-U011MAJS68P-9ad2f57881d0-512"
          alt="profile"
          className="home-profile-image"
        />
        <Typography variant="h4">HELLO</Typography>
        <Typography variant="h4">I AM JASON LAM</Typography>
        <Typography variant="h4">
          <ReactTypingEffect
            text="FULLSTACK DEVELOPER & PHARMACIST"
            speed="100"
            eraseDelay="500000"
            typingDelay="1500"
            className = 'home-text-effect'
          />
        </Typography>
        <div className="home-bar">
          <Tooltip title="Link To Facebook">
            <a href={personalData.facebook.url}>
              <IconButton>
                <FacebookIcon fontSize="large" />
              </IconButton>
            </a>
          </Tooltip>
          <Tooltip title="Link To LinkedIn">
          <a href={personalData.linkedIn.url}>
            <IconButton>
              <LinkedInIcon fontSize="large" />
            </IconButton>
            </a>
          </Tooltip>
          <Tooltip title="Link To Github">
          <a href={personalData.github.url}>
            <IconButton>
              <GitHubIcon fontSize="large" />
            </IconButton>
            </a>
          </Tooltip>
          <Tooltip title="Link To Instagram">
          <a href={personalData.instagram.url}>
            <IconButton>
              <InstagramIcon fontSize="large" />
            </IconButton>
            </a>
          </Tooltip>
        </div>
      </div>
    </LightSpeed>
  );
};

export default Home;
