import React from "react";

const Playlist = () => {
  return (
    <div className="card"> 
        <b>Currently listening to</b>
        <div className="circle"> 
        <iframe
          title="spotify"
          src="https://open.spotify.com/embed/playlist/62W2MjEoHtmobGgcaMurP9"
          width="300"
          height="380"
          frameBorder="0"
          allow="encrypted-media"
        ></iframe>
        </div>
    </div>
  );
};

export default Playlist;
