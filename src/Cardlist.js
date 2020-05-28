import React from "react";
import Card from "./Card";

const Cardlist = ({ data }) => {
  return (
    <div>
      {data.map((people, i) => {
        return (
          <Card
            key={i}
            name={data[i].name}
            gender={data[i].gender}
            birth_year={data[i].birth_year}
          />
        );
      })}
    </div>
  );
};

export default Cardlist;
