import React from "react";
import File from "../assets/imageUpload.png";
import Link from "../assets/link.png";

const input = () => {
  return (
    <div className="input">
      <input type="text" id="" placeholder="Type something..." />
      <div className="send">
        <img src={Link} alt="Link Image" />
        <input style={{ display: "none" }} type="file" id="file" />
        <label htmlFor="file">
          <img src={File} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default input;
