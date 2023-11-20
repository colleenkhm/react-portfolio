import React from 'react'
import { Grid } from '@mui/material'
import portfolioResume from '../assets/colleen-murray-portfolio-resume.pdf'
import '../styles.css/Resume.css'
import resumeScreenshot from '../assets/resume-screenshot.png'

function Resume() {
  return (
    <div className="skills-container">
      <div>
        <Grid container spacing={20}>
          <Grid item xs={12} md={3}>
            <div className="skills" id="technical-skills">
              <h4>Technical Skills</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Material UI</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Express.js</li>
                <li>Handlebars.js</li>
                <li>Node.js</li>
                <li>GraphQL</li>
                <li>Apollo Client</li>
                <li>Git/Github/Gitlab</li>
                <li>SQL/MySQL/Sequelize</li>
                <li>MongoDB/Mongoose</li>
                <li>Insomnia</li>
                <li>Jest Testing</li>
                <li>Amplify</li>
                <li>AWS</li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className="centered-grid-item">
            <div className="resume-image">
              <img src={resumeScreenshot} alt="resume"></img>
              <div className="resume-link">
                <a
                  href={portfolioResume}
                  target="_blank"
                  className="resume-link"
                  rel="noopener noreferrer"
                >
                  Download Resume Here
                </a>
                </div>
              </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="skills" id="soft-skills">
              <h4>Other Strengths</h4>
              <ul>
                <li>Adaptability</li>
                <li>Customer-Focused</li>
                <li>Self-Motivation</li>
                <li>Collaboration</li>
                <li>Leadership</li>
                <li>Education</li>
                <li>Growth Mindset</li>
                <li>Empathy</li>
                <li>Translation</li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Resume
