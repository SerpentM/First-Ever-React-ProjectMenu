import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name" id="menu">
          {props.menu}
        </h2>
        <img
          id="forimg"
          className="circle-img"
          src="https://image.flaticon.com/icons/png/512/1079/1079176.png"
          alt="Vegetable_Image"
        ></img>
      </div>
      <div className="bottom">
        <p id="price" class="info">
          {props.age}
        </p>
        <p>{props.work}</p>
      </div>
    </div>
  );
}

export default Card;
