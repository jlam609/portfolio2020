import React from 'react';
import {Button, Typography} from '@material-ui/core';
import {resume} from '../resumedata';

const Portfolio:React.FC = () => {
    return(
      <div className='portfolio-container'>
        {resume.portfolio.projects.map((project,idx) => {
            <div key={idx}>
            <Typography variant='h3'>{project.title}</Typography>
            <hr/>
            <img src={project.image} alt={project.image}/>
            <Typography variant='h4'>{project.role}</Typography>
            <Typography variant='h5'>{project.category}</Typography>
            <a href={project.url}>
            <Button>See Demo</Button>
            </a>
            <a href={project.github}>
            <Button>Github</Button>
            </a>
            </div>
        })}
      </div>
    )
  }
  
  export default Portfolio