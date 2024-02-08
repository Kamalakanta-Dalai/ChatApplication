import React from "react";
import Ganu from "../assets/ganu.jpg";

const search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="search" id="" placeholder="Search People" />
        <div className="userChat">
          <img src={Ganu} alt="avatar" />
          <div className="userChatInfo">
            <span>Ganesh</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default search;
