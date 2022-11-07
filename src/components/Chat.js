import React from "react";
import Add from "../img/add.png";
import Cam from "../img/cam.png";
import MORE from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Add} alt="Add" />
          <img src={Cam} alt="cam" />
          <img src={MORE} alt="more" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
