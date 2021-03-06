import React from "react";
import { Grid } from "@material-ui/core";

import profile from "../assets/profile-pic.jpg";
import friends from "../assets/friends.jpg";

import Playlist from "./Playlist";

const About = () => {
  return (
    <div>
      <Grid container xs={12} style={{height: 500}} alignItems="baseline" className="mt-40">
        <Grid item xs={6}>
          <p className="title">About Me</p>
          <p className="w-4/5">
            In my free time, I explore new food places, discover new musicals,
            dramas or films, watch sunsets and work out (so that I can eat
            more).{" "}
          </p>
          <p className="mt-4 w-4/5">
            I'm currently watching <a
                href="https://www.netflix.com/sg/title/80232398"
                target="_blank"
                rel="noreferrer"
              >Bridgerton Season 2</a>, <a
                href="https://www.netflix.com/sg/title/81517168"
                target="_blank"
                rel="noreferrer"
              >Twenty-Five Twenty-One</a> and a bunch of cooking videos on YouTube. You can also check out my favourite songs in a spotify playlist below!
          </p>
          <div className="mt-4 flex justify-start">
          <Playlist />
          </div>
  
        </Grid>
        <Grid item xs={6} className="relative">
            <img className="image1" src={profile} alt="profile" />
            <img className="image2" src={friends} alt="friends" />
        </Grid>
      </Grid>
    </div>
  );
};

export default About;


