import React from "react";

var randomNumber = Math.floor(Math.random() * 5);
function Button() {
  function clickHandler() {
    var randomNumber = Math.floor(Math.random() * 4);
    fetch("https://sheetdb.io/api/v1/5ehv3ry0d6jce")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        document.getElementById("menu").innerHTML = data[randomNumber].["Menu"];
        document.getElementById("price").innerHTML = "Todays Price "+data[randomNumber].["Todays Price"] ;
        document.getElementById("forimg").src = data[randomNumber].imglink;
      });
  }
  return (
    <button onClick={clickHandler} className="learn-more">
      press me
    </button>
  );
}
export default Button;
