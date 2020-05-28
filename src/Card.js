import React from "react";

const Card = ({ name, gender, birth_year }) => {
  return (
    <div className="bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5">
      <div>
        <h2>{name}</h2>
        <p>Gender: {gender}</p>
        <p>Birth Year: {birth_year}</p>
      </div>
    </div>
  );
};

export default Card;
