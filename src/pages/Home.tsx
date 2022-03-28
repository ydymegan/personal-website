import React from "react";

import Navigation from "../components/Navigation";
import Playlist from "../components/Playlist";
import Interest from "../components/Interest";
import Skills from "../components/Skills";
import Button from "../components/Button";

import profile from "../assets/fun.png";
import fistbump from "../assets/fistbump.png"
import smiley from "../assets/smiley.png";

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
            <p>I'm interested to synthesize my technical skills and passion for design to build products for good! </p>
          </div>
          <div className="my-4">
              <p>In my free time, I explore new food places, discover new musicals, dramas or films, watch sunsets and work out (so that I can eat more). </p>
          </div>
          <div className="my-4">
            <p className="position">
              Currently a Solution Delivery Intern @{" "}
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
        <p className="title">What I've been up to</p>
        <li>Software Engineer at try{'{'}catch{'}'}, a women in tech organization that builds software projects for social good in Singapore. We're currently working on a </li>
        <Button text={'See Project'} link={'https://github.com/CareerSocius/resumebuilder'}/>
        <li>Technology Volunteer at <a href="https://www.bridgesforenterprise.com/"
                target="_blank"
                rel="noreferrer">Bridges for Enterprise</a>'s Global Product Management Team </li>
      </div>
      <div className="flex justify-end">
        <p className="title">Fun things I've done</p>
        <li>Developer Student's Club Hack for Good 2022, Champions</li>
      </div>
      <div></div>
      <Skills />
      <Playlist />
      <Interest />
      <p className="flex justify-center">Made for you by Megan Yee</p>
    </div>
  );
};

export default Home;
