import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function footer() {
  return (
    <nav className="footer footer-expand-lg">
      <Link className="footer-brand name" to="/">
        Emily Aguirre
        <small className="header-title"> / Front-End Developer</small>
      </Link>
      <div>
        <ul className="footer-nav ">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === '/' ||
                window.location.pathname === '/about'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              ABOUT ME
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              to="/projects"
              className={
                window.location.pathname === '/projects'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              PROJECTS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resume"
              className={
                window.location.pathname === '/resume'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              RESUME
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={
                window.location.pathname === '/contact'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default footer;
