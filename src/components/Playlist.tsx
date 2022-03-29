import React from "react";

const Playlist = () => {
  return (
    <div className="circle">
      {/* <iframe
        title="spotify"
        src="https://open.spotify.com/embed/playlist/62W2MjEoHtmobGgcaMurP9"
        width="300"
        height="380"
        frameBorder="0"
        allow="encrypted-media"
      ></iframe> */}
      <iframe
        title="spotify"
        src="https://open.spotify.com/embed/playlist/62W2MjEoHtmobGgcaMurP9?utm_source=generator&theme=0"
        width="100%"
        height="230"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default Playlist;
