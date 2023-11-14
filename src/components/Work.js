import React from 'react'
import '../styles.css/Work.css'
import { Grid } from '@mui/material'

function Work() {
  return (
    <Grid
      container
      className="section-container"
      justifyContent="center"
      spacing={2}
    >
      <Grid item xs={12} sm={6} alignItems="center" justifyContent="center">
        <div className="work-container" id="work-day-scheduler">
          <a
            className="flex-item"
            href="https://colleenkhm.github.io/run-my-life/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>timely</h4>
            <p>HTML/CSS/JavaScript</p>
          </a>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} alignItems="center" justifyContent="center">
        <div className="work-container" id="rebound">
          <a
            className="flex-item"
            href="https://colleenkhm.github.io/rebound/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>rebound</h4>
            <p>HTML/CSS/JavaScript</p>
          </a>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} alignItems="center" justifyContent="center">
        <div className="work-container" id="biwoc-health">
          <a
            className="flex-item"
            href="https://www.biwochealth.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>BIWOC Health</h4>
            <p>HTML/CSS/Squarespace</p>
          </a>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} alignItems="center" justifyContent="center">
        <div className="work-container" id="team-profile-generator">
          <a
            className="flex-item"
            href="https://colleenkhm.github.io/team-profile-generator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>team profile generator</h4>
            <p>Node/Inquirer/Jest</p>
          </a>
        </div>
      </Grid>
    </Grid>
  )
}

export default Work
