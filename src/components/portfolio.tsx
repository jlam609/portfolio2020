import React from "react";
import { IconButton, Tooltip, Typography } from "@material-ui/core";
import { resume } from "../resumedata";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";
import { Element } from "react-scroll";
import { Fade } from "react-reveal";

const Portfolio: React.FC = () => {
  return (
    <Fade>
      <Element name="Projects">
        <div className="portfolio">
          <Typography variant="h3">Projects
          <hr className='portfolio-divider'/>
          </Typography>
          <div className="portfolio-container">
            {resume.portfolio.projects.map((project, idx) => {
              return (
                <div key={idx} className="portfolio-project">
                  <Typography variant="h4">{project.title}</Typography>
                  <hr className='portfolio-divider'/>
                  <img
                    className="portfolio-picture"
                    src={project.image}
                    alt={project.image}
                  />
                  <Typography variant="h5">{project.role}</Typography>
                  <Typography variant="h6">{project.category}</Typography>
                  <div className="portfolio-links">
                    <Tooltip title="demo-link">
                      <a href={project.url}>
                        <IconButton size="medium">
                          <LinkIcon fontSize="large" />
                        </IconButton>
                      </a>
                    </Tooltip>
                    <Tooltip title="Github-link">
                      <a href={project.github}>
                        <IconButton size="medium">
                          <GitHubIcon fontSize="large" />
                        </IconButton>
                      </a>
                    </Tooltip>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Element>
    </Fade>
  );
};

export default Portfolio;
