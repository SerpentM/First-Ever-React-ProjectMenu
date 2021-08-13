import React from "react";

function Share() {
  return (
    <div className="container">
      <h3 style={{ fontSize: "1.3em" }}>Share This App</h3>
      <div className="social">
        <a href="#" id="share-wa" className="sharer button">
          <i className="fa fa-3x fa-whatsapp"></i>
        </a>

        <a href="#" id="share-fb" className="sharer button">
          <i className="fa fa-3x fa-facebook-square"></i>
        </a>
        <a href="#" id="share-tw" className="sharer button">
          <i className="fa fa-3x fa-twitter-square"></i>
        </a>
        <a href="#" id="share-li" className="sharer button">
          <i className="fa fa-3x fa-linkedin-square"></i>
        </a>
        <a href="#" id="share-gp" className="sharer button">
          <i className="fa fa-3x fa-google-plus-square"></i>
        </a>
        <a href="#" id="share-em" className="sharer button">
          <i className="fa fa-3x fa-envelope-square"></i>
        </a>
      </div>
    </div>
  );
}
export default Share;
