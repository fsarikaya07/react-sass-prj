import React from "react";

const Card = (data) => {
  const { title, image, desc } = data;
  return (
    <div className="card">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <img src={image} />
      <div className="card-over">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
