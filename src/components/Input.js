import React from "react";
import Attach from "../img/attach.png";
import Img from "../img/img.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="type something..." />
      <div className="send">
        <img src={Attach} alt="Attach" />
        <input type="file" id="inputt" style={{ display: "none" }} />
        <label htmlFor="inputt">
          <img src={Img} alt="Img" />
        </label>
        <button>send</button>
      </div>
    </div>
  );
};

export default Input;
