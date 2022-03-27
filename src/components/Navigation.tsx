import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="h-4">

        <p><a href="/about">about</a></p>
        <Link to="/experience">Experience</Link>

    </div>
  );
};

export default Navigation;
