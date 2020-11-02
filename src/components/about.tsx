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
            <Typography variant="h4">About</Typography>
            <hr />
            <div className="summary">
              <Typography variant="h6">
                {personalData.about}
              </Typography>
            </div>
            <Typography variant="h4">Work Experience</Typography>
            <hr/>
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
            </Timeline>
          </div>
        </Element>
      </div>
    </Fade>
  );
};

export default About;
