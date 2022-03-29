import React from "react";
import RiShareBoxFill from "react-icons/ri";

import Navigation from "../components/Navigation";
import About from "../components/About";
import Skills from "../components/Skills";
import Button from "../components/Button";

import { Card } from "@material-ui/core";

import profile from "../assets/smiley.png";
import fistbump from "../assets/fistbump.png";
import fun from "../assets/fun.png";

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
            <p>
              I'm interested to synthesize my technical skills and passion for
              design to build products for good!{" "}
            </p>
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
      <Skills />
      <div className="flex">
        <img src={fun} alt="fun" />
        <div className="my-12 text-right w-2/3 pl-2 align-center">
          <p className="title">What I've been up to</p>
          <p className="my-4">
            Coding at{" "}
            <a
              href="https://www.linkedin.com/company/trycatchclub/"
              target="_blank"
              rel="noreferrer"
            >
              try{"{"}catch{"}"}
            </a>
            , a <p className="pink">women in tech organization</p> that builds
            software projects for social good in Singapore. We're currently
            building a career platform for CareerSocius, it's still a work in
            progress but you can{" "}
            <a
              href="https://github.com/CareerSocius/resumebuilder"
              target="_blank"
              rel="noreferrer"
            >
              check it out here!
            </a>{" "}
          </p>
          <p className="my-4">
            Volunteering at{" "}
            <a
              href="https://www.bridgesforenterprise.com/"
              target="_blank"
              rel="noreferrer"
            >
              Bridges for Enterprise
            </a>
            's Global Product Management Team. We are a UK-based non-profit
            providing pro-bono advisory services to social entrepreneurs. I'm
            currently working on an internal admin portal to be used by members
            of BfE.
          </p>
          <div className="text-right">
            <p className="title">Fun things I've done</p>
            <p>Champions, Developer Student's Club Hack for Good 2022</p>
            <p>Govtech Girls in Tech Summer Mentorship Programme 2020</p>
            <p>Google Computer Science Summer Institute Institute 2019</p>
          </div>
        </div>
      </div>
      <div id="about"><About /></div>
      <p className="mt-24 flex justify-center">Made for you by Megan Yee</p>
    </div>
  );
};

export default Home;
