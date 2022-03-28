import React from "react";
import { Link } from "react-router-dom";
import myResume from "../assets/resume.pdf";

const Navigation = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <p className="name">Megan Yee</p>
      </Link>
      <div className="sub-navbar">
        <p>
          <a href="/about">about</a>
        </p>
        <p>
          <a href={myResume} target="_blank" rel="noreferrer">
            resume
          </a>
        </p>
        <p>
          <a
            href="https://linkedin.com/in/megan-yee"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </a>
        </p>
        <p>
          <a href="mailto:meganyee@u.nus.edu">email</a>
        </p>
      </div>
    </div>
  );
};

export default Navigation;
