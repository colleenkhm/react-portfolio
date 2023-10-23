import React from 'react'
import { Grid } from '@mui/material'
import '../styles.css/Footer.css'

function Footer() {
  return (
    <footer id="footer">
      <h4>Let's Connect!</h4>
      <Grid
        container
        className="grid-container"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <div className="contact-item">
            <i className="fa-solid fa-people-arrows-left-right fa-2x"></i>
            <a
              href="https://www.linkedin.com/in/colleen-murray-161314230/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </Grid>
        <Grid item>
          <div className="contact-item">
            <i className="fa-solid fa-envelope fa-2x"></i>
            <a className="contact-link" href="mailto:colleenkhm@gmail.com">
              Email
            </a>
          </div>
        </Grid>
        <Grid item>
          <div className="contact-item">
            <i className="fa-solid fa-phone fa-2x"></i>
            <a className="contact-link" href="tel:5034139680">
              Phone
            </a>
          </div>
        </Grid>
        <Grid item>
          <div className="contact-item">
            <i className="fa-solid fa-desktop fa-2x"></i>
            <a
              href="https://github.com/colleenkhm"
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
            >
              GitHub
            </a>
          </div>
        </Grid>
        <Grid>
          <div className="contact-item">
            <i className="fas fa-comments fa-2x"></i>
            <a
              href="https://www.duolingo.com/profile/colleenkhm"
              target="_blank"
              rel="noopener noreferrer"
              title="Duolingo"
            >
              Duolingo
            </a>
          </div>
        </Grid>
      </Grid>
      <div className="built-using">built using React.js and MUI</div>
    </footer>
  )
}

export default Footer
