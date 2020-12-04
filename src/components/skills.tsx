import { Divider, Typography } from "@material-ui/core";
import React from "react";
import { resume } from "../resumedata";
import { Bounce } from "react-reveal";
import { Element } from "react-scroll";

const Skills: React.FC = () => {
  return (
    <Bounce>
      <Element name="Skills">
        <div className="skillsDiv">
          <Typography variant="h3">Technical Skills</Typography>
          <hr />
          <div className="skills">
            <div className="skillsTable">
              <Typography variant="h4">Languages</Typography>
              <Divider />
              <ul>
                {resume.skills.languages.map((skill, idx) => {
                  return (
                    <li key={idx} className="skillsList">
                      <img
                        src={skill.image}
                        alt={skill.image}
                        className="skillsLogo"
                      />
                      <p className="skillsText">{skill.name}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="middle">
              <div className="skillsTable">
                <Typography variant="h4">Frameworks</Typography>
                <hr />
                <ul>
                  {resume.skills.frameworks.map((skill, idx) => {
                    return (
                      <li key={idx} className="skillsList">
                        <img
                          src={skill.image}
                          alt={skill.image}
                          className="skillsLogo"
                        />
                        <p className="skillsText">{skill.name}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="skillsTable">
                <Typography variant="h4">Databases</Typography>
                <Divider />
                <ul>
                  {resume.skills.Databases.map((skill, idx) => {
                    return (
                      <li key={idx} className="skillsList">
                        <img
                          src={skill.image}
                          alt={skill.image}
                          className="skillsLogo"
                        />
                        <p className="skillsText">{skill.name}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="skillsTable">
              <Typography variant="h4">Technologies/Misc</Typography>
              <Divider />
              <ul>
                {resume.skills.Technologies.map((skill, idx) => {
                  return (
                    <li key={idx} className="skillsList">
                      <img
                        src={skill.image}
                        alt={skill.image}
                        className="skillsLogo"
                      />
                      <p className="skillsText">{skill.name}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </Element>
    </Bounce>
  );
};

export default Skills;
