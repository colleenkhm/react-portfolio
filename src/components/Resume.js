import React from 'react'
import { Grid } from '@mui/material'
import portfolioResume from '../assets/colleen-murray-portfolio-resume.pdf'
import '../styles.css/Resume.css'
import resumeScreenshot from '../assets/resume-screenshot.png'

function Resume() {
  return (
    <div className="skills-container">
      <div>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <div className="skills" id="technical-skills">
              <h4>Technical Skills</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>Node</li>
                <li>React</li>
                <li>Express</li>
                <li>SQL/MySQL/Sequelize</li>
                <li>MongoDB/Mongoose</li>
                <li>Handlebars</li>
                <li>GraphQL</li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="skills" id="soft-skills">
              <h4>Soft Skills</h4>
              <ul>
                <li>Adaptability</li>
                <li>Customer Service</li>
                <li>Collaboration</li>
                <li>Language/Translation</li>
                <li>Leadership</li>
                <li>Education</li>
                <li>Growth Mindset</li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="resume-image">
              <img src={resumeScreenshot} alt="resume"></img>
            </div>
            <div className="resume-link">
              <a
                href={portfolioResume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume Here
              </a>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Resume
