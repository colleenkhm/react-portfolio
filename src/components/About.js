import React from 'react'
import { Grid } from '@mui/material'
import '../styles.css/About.css'

function About() {
  return (
    <div>
      <div>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <h5>hometown</h5>
            <p>Portland, OR</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <h5>living in</h5>
            <p>St. Louis, MO</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <h5>occupation</h5>
            <p>Software Engineer at MilliporeSigma</p>
          </Grid>
        </Grid>
      </div>
      <div className="bio">
        I developed an interest in language-learning at a young age, which took
        me from studying Spanish, French, and ASL throughout high school to
        graduating from Lawrence University with a Bachelor's degree in
        Linguistics and Classical Languages & Literature. After dedicating a
        year to national volunteer service through AmeriCorps, I worked as a
        barista and as a bartender while exploring potential career
        opportunities. I discovered coding to be the intersection of language,
        creativity, and logic I had sought after for so long and eventually went
        on to obtain a Full Stack Web Development Certificate through Washington
        University in St. Louis. I currently work as a software engineer for an
        ecommerce site trafficked in over 140 countries, though I am open to coding opportunities that more closely align with my interests whether they be in
        language, education, or the arts.
      </div>
    </div>
  )
}

export default About
