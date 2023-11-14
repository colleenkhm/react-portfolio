import React from 'react'
import '../styles.css/WorkDraft.css'

function Work() {
  return (
    <section className="section" id="work">
      <div className="work-wrapper">
        <div className="work-container">
          <a
            className="flex-item"
            id="team-profile-generator"
            href="https://colleenkhm.github.io/team-profile-generator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h4>Team Profile Generator</h4>
              <p>Node/Inquirer/Jest</p>
            </div>
          </a>
        </div>
        <div className="work-container">
          <a
            className="flex-item"
            id="work-day-scheduler"
            href="https://colleenkhm.github.io/run-my-life/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h4>Timely</h4>
              <p>HTML/CSS/JavaScript</p>
            </div>
          </a>
        </div>
        <div className="work-container">
          <a
            className="flex-item"
            id="biwoc-health"
            href="https://www.biwochealth.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h4>BIWOC Health</h4>
              <p>HTML/CSS/Squarespace</p>
            </div>
          </a>
        </div>
        <div className="work-container">
          <a
            className="flex-item"
            id="rebound"
            href="https://colleenkhm.github.io/rebound/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h4>Rebound</h4>
              <p>HTML/CSS/JavaScript</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Work
