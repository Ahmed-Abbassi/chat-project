import React from "react";

const Chats = () => {
  return (
    <div className="search">
      {/* user 1 */}
      <div className="contain">
        <div className="userChat">
          <img
            src="https://images.pexels.com/photos/2065490/pexels-photo-2065490.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="stud"
          />
          <div className="userChatInfo">
            <span>Jane</span>
            <p>Hello</p>
          </div>
        </div>
      </div>
      {/* //user 2 */}
      <div className="contain">
        <div className="userChat">
          <img
            src="https://images.pexels.com/photos/2065490/pexels-photo-2065490.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="stud"
          />
          <div className="userChatInfo">
            <span>Jane</span>
            <p>Hello</p>
          </div>
        </div>
      </div>
      {/* user 3 */}
      <div className="contain">
        <div className="userChat">
          <img
            src="https://images.pexels.com/photos/2065490/pexels-photo-2065490.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="stud"
          />
          <div className="userChatInfo">
            <span>Jane</span>
            <p>Hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
