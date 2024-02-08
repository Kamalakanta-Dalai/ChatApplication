import React from "react";
import Ganu from "../assets/ganu.jpg";
import Kammo from "../assets/kammo.jpg";

const message = () => {
  return (
    <div className="message">
      <div className="messageInfo">
        <img style={{ height: 32 }} src={Ganu} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img style={{ height: 200 }} src={Kammo} alt="" />
      </div>
    </div>
  );
};

export default message;
