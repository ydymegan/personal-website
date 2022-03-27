import React from "react";

import Playlist from "../components/Playlist";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div>
        <Navigation />
        <a href="/about">Hey there, I'm Megan</a>
        <p>I'm a sophomore at the National University of Singapore, studying Information Systems with a minor in Management, and am also currently enrolled under the University Scholars Programme. I have experience in software engineering, product management, designing, analytics and marketing. </p>
      <Playlist />
    </div>
  );
};

export default Home;
