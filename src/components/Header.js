import React from 'react'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Work from './Work'
import Resume from './Resume'

import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

function Header() {
  return (
    <Router>
      <header>
        <h1>
          <Link to="/">Colleen Murray</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/work">work</Link>
            </li>
            <li>
              <Link to="/resume">resume</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="*" element={<Navigate to="/home" />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </Router>
  )
}

export default Header
