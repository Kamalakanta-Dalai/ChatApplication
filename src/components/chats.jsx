import React from "react";
import Ganu from "../assets/ganu.jpg";
import Lipsa from "../assets/lipsa.jpg";
import Kammo from "../assets/kammo.jpg";

const chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={Ganu} alt="avatar" />
        <div className="userChatInfo">
          <span>Ganesh</span>
          <p>Hello Kammo</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Lipsa} alt="avatar" />
        <div className="userChatInfo">
          <span>Lipsa</span>
          <p>Hello Kammo</p>
        </div>
      </div>

      <div className="userChat">
        <img src={Ganu} alt="avatar" />
        <div className="userChatInfo">
          <span>Rohit</span>
          <p>Hello Kammo</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Kammo} alt="avatar" />
        <div className="userChatInfo">
          <span>Pranay</span>
          <p>Hello Kammo</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Ganu} alt="avatar" />
        <div className="userChatInfo">
          <span>Arpan</span>
          <p>Hello Kammo</p>
        </div>
      </div>
    </div>
  );
};

export default chats;
