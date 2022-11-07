import React from "react";

const MessageFriend = () => {
  return (
    <div className="message">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="ii"
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        {/* <img
          src="https://images.pexels.com/photos/2065490/pexels-photo-2065490.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="hoho"
        /> */}
      </div>
    </div>
  );
};

export default MessageFriend;
