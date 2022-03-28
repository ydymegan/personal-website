import React from "react";

const Button = ({ text, link }: { text: string; link: string }) => {
  const handleClick = () => {
    window.open(link);
  };
  return (
    <button className="btn" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
