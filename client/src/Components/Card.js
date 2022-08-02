import { useState } from "react";
import "./card.css";

const arr = [];
for (let x = 0; x < 20; x++) {
  arr.push(x);
}

const Card = () => {
  return (
    <div className="container">
      {arr.map((item, index) => {
        return <Cards key={index} />;
      })}
    </div>
  );
};

const Cards = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div
      className={`card ${isHovering ? "hover" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseOut}
    >
      <img
        src="https://image.tmdb.org/t/p/original/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg"
        alt="movie"
      />
      <div
        className={`card-detail ${isHovering ? "hover" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseOut}
      />
    </div>
  );
};

export default Card;
