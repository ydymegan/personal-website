import React from "react";

import Navigation from "../components/Navigation";
import Playlist from "../components/Playlist";
import Interest from "../components/Interest";
import Skills from "../components/Skills";

import profile from "../assets/smiley.png";

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="header">
        <div className="header-content">
          <p className="title">
            Hey there, <a href="about">I'm Megan!</a>
          </p>
          <div className="my-4">
            <p>
              I'm a sophomore at the National University of Singapore, studying
              Information Systems with a minor in Management, and am also
              currently enrolled under the University Scholars Programme. I have
              experience in software engineering, product management, designing,
              analytics and marketing.{" "}
            </p>
          </div>
          <div className="my-4">
            <p>I'm passionate about . </p>
          </div>
          <div className="my-4">
            <p className="position">
              Solution Delivery Intern @{" "}
              <a
                href="https://www.swatmobility.com/"
                target="_blank"
                rel="noreferrer"
              >
                SWAT Mobility
              </a>
              . Incoming Full-Stack Software Engineer Intern at{" "}
              <a
                href="https://www.hypotenuse.ai/"
                target="_blank"
                rel="noreferrer"
              >
                Hypotenuse AI (YC S20)
              </a>
              .
            </p>
          </div>
        </div>
        <img src={profile} alt="profile" />
      </div>
      <div>
        <p className="title">I am currently involved in</p>
      </div>
      {/* <div>
        <p className="title">I have </p>
      </div> */}
      <div></div>
      <Skills />
      <Playlist />
      <Interest />
    </div>
  );
};

export default Home;
