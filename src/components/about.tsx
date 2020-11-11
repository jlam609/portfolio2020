import React from "react";
import { Typography } from "@material-ui/core";
import { Element } from "react-scroll";
import { Fade } from "react-reveal";
import { resume, personalData } from "../resumedata";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@material-ui/lab";

const About: React.FC = () => {
  return (
    <Fade top cascade>
      <div className="about">
        <Element name="About">
          <div className="about-text">
            <Typography variant="h3">About</Typography>
            <hr />
            <div className="summary">
              <Typography variant="h6">{personalData.about}</Typography>
            </div>
            <Typography variant="h3">Work Experience</Typography>
            <hr />
            <Timeline align="alternate">
              <div className="work">
                {resume &&
                  resume.work &&
                  resume.work.map((each, idx) => {
                    return (
                      <TimelineItem key={idx}>
                        <TimelineSeparator>
                          <TimelineDot />
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Typography variant="h5"> {each.company}</Typography>
                          <Typography variant="h6">{each.location}</Typography>
                          <Typography variant="h6">{each.years}</Typography>
                          <ul>
                            {each.description.map((desc, idx) => {
                              return <li key={idx}>{desc}</li>;
                            })}
                          </ul>
                        </TimelineContent>
                      </TimelineItem>
                    );
                  })}
              </div>
              <hr />
            </Timeline>
          </div>
          <div className='education'>
            <Typography variant="h3">Education</Typography>
            <hr />
            {resume.education.map((school, idx) => {
              return (
                <div key={idx} className='school'>
                  <img src={school.image} alt={school.image} height={300} width={500}/>
                  <div className={'schoolInfo'}>
                  <Typography variant="h4">{school.school}</Typography>
                  <Typography variant="h5">{school.degree}</Typography>
                  <Typography variant="h5">{school.graduated}</Typography>
                  <Typography variant="h6">{school.description}</Typography>
                  </div>
                </div>
              );
            })}
          </div>
        </Element>
      </div>
    </Fade>
  );
};

export default About;
