import React from "react";
import "tachyons";
const Card = (props) => {
  return (
    <div className="bg-light-green dib br3 pa0 mr5 mt5 grow">
      <img src={`https://robohash.org/${props.id}?200*200`} alt="robots"></img>
      <div className="">
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
