import React from "react";

import myResume from "../assets/resume.pdf";

const Navigation = () => {
  return (
    <div className="navbar">
        <p className="name">Megan Yee</p>
      <div className="sub-navbar">
        <p>
          <a href="/">about</a>
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
