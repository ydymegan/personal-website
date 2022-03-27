import React from "react";

import profile from "../assets/profile-pic.jpg";
import Navigation from "../components/Navigation";

const About = () => {
    return (
        <div>
            <Navigation />
            <img src={profile} alt="profile"/>
        </div>
    );
}

export default About;
