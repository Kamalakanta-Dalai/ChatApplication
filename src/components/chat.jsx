import React from "react";
import Messages from "./messages.jsx";
import Input from "./input.jsx";
import Ganu from "../assets/ganu.jpg";
import Cam from "../assets/camera.png";
import Add from "../assets/add.png";
import More from "../assets/more.png";

const chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="chatNavUser">
          <img src={Ganu} alt="" />
          <span>Rohit</span>
        </div>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default chat;
