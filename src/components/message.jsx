import React, { useContext } from "react";
import Ganu from "../assets/ganu.jpg";
import Kammo from "../assets/kammo.jpg";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  return (
    <div className="message owner">
      {/* {<div className="messageInfo">
        <img src={Ganu} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img style={{ height: 200 }} src={Kammo} alt="" />
      </div>} */}
    </div>
  );
};

export default message;
