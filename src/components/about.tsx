import React from "react";
import { Typography } from "@material-ui/core";
import { Element } from "react-scroll";
import {Fade, Flip} from 'react-reveal'

const About: React.FC = () => {
  return (
    <div className="about">
      <Element name="About">
        <div className="about-text">
          <Fade left>
          <Typography variant="h4">About</Typography>
          <hr />
          <div className="summary">
            <Typography variant="h6">
              {" "}
              Pills, pills, pills, everywhere. This is the gist of my life as a
              pharmacist of 6 years. As a legal drug dealer I have worked in a
              variety of settings including retail, managed care and clinical
              pharmacy. I grew interested in coding after watching coding videos
              and speaking to my friends and family in the field. This made me
              ultimately decide to join the Fullstack Academy bootcamp.
              Throughout the course I have grown to truly love the dynamic world
              of coding. I look forward to my journey down this road and hope I
              can combine my prior experience as a pharmacist into this new
              world.{" "}
            </Typography>
          </div>
          <div className="work">
            <Typography variant="h4">Work Experience</Typography>
            <hr />
            <Typography variant="h5"> PAGNY: NYCHHC Pharmacist</Typography>
            <Typography variant="h6">New York, NY</Typography>
            <Typography variant="h6">October 2017- Present</Typography>
            <ul>
              <li>
                Ensure quality of care through collaboration with clinical team
                members to achieve quality of care and meet desired outcomes
              </li>
              <li>
                Reduce errors by analyzing medication orders for quality and
                efficacy before administering to patients
              </li>
            </ul>
            <hr />
            <Typography variant="h5"> CVS HEALTH</Typography>
            <Typography variant="h6">
              Pharmacy Manager/ Staff Pharmacist
            </Typography>
            <Typography variant="h6">New York, NY</Typography>
            <Typography variant="h6">May 2015 - October 2017</Typography>
            <ul>
              <li>
                Improved pharmacy success by leading a “challenged” pharmacy to
                become a top ranking pharmacy of the district
              </li>
              <li>
                Managed all pharmacy-related matters including scheduling,
                budgeting, pharmacy operations as well as performance review of
                employees
              </li>
            </ul>
          </div>
          </Fade>
        </div>
      </Element>
      <Flip right>
      <img
        className="about-picture"
        src="https://i.ibb.co/DWLMxNy/leftprofile.jpg"
        alt="image"
      />
      </Flip>
    </div>
  );
};

export default About;
