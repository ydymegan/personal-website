import React from "react";

import python from "../assets/logos/python.svg";
import typescript from "../assets/logos/ts.svg";
import javascript from "../assets/logos/js.svg";
import java from "../assets/logos/java.svg";
import sql from "../assets/logos/sql.svg";
import react from "../assets/logos/react.svg";
import redux from "../assets/logos/redux.svg";
import angular from "../assets/logos/angular.svg";
import firebase from "../assets/logos/firebase.svg";
import nodejs from "../assets/logos/nodejs.svg";
import jakartaee from "../assets/logos/jakartaee.png";
import git from "../assets/logos/git.svg";
import figma from "../assets/logos/figma.svg";

const Skills = () => {
  return (
    <div className="my-4 w-4/5">
      <p className="title">Skills</p>
      <p className="my-4">
        Frontend Development, Backend Engineering, Product Management, Data Analytics, User
        Research, Business Requirement Gathering, Wire-framing, Prototyping,
        Digital Marketing, Social Media Management
      </p>
      <p className="subheading">Relevant Coursework</p>
      <p className="my-4">
        Enterprise Systems Architecture and Design, Enterprise Systems
        Server-side Design and Development, Data Structures and Algorithms, Data
        Management {"&"} Visualisation
      </p>
      <p className="subheading">Tools and Technologies</p>
      <div className="flex flex-row gap-2 my-4">
        <img src={typescript} alt="logo" className="logo" />
        <img src={javascript} alt="logo" className="logo" />
        <img src={java} alt="logo" className="logo" />
        <img src={python} alt="logo" className="logo" />
        <img src={sql} alt="logo" className="logo" />
        <img src={react} alt="logo" className="logo" />
        <img src={redux} alt="logo" className="logo" />
        <img src={angular} alt="logo" className="logo" />
        <img src={nodejs} alt="logo" className="logo" />
        <img src={jakartaee} alt="logo" className="logo" />
        <img src={firebase} alt="logo" className="logo" />
        <img src={git} alt="logo" className="logo" />
        <img src={figma} alt="logo" className="logo" />
      </div>
    </div>
  );
};

export default Skills;
