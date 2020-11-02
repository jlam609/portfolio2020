import React from "react";
import { Typography } from "@material-ui/core";
import ReactTypingEffect from "react-typing-effect";
import { LightSpeed } from "react-reveal";

const Home: React.FC = () => {
  return (
    <LightSpeed left>
      <div className="home-text">
        <img
          src="https://ca.slack-edge.com/T024FPYBQ-U011MAJS68P-9ad2f57881d0-512"
          alt="profile"
          className="home-profile-image"
        />
        <Typography variant="h3">HELLO</Typography>
        <Typography variant="h3">I AM JASON LAM</Typography>
        <Typography variant="h3">
          <ReactTypingEffect
            text="FULLSTACK DEVELOPER & PHARMACIST"
            speed="100"
            eraseDelay="500000"
            typingDelay="1500"
          />
        </Typography>
      </div>
    </LightSpeed>
  );
};

export default Home;
