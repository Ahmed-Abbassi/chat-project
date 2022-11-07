import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchFrom">
        <input type="text" placeholder="find a user" />
      </div>
      <div className="contain">
        <div className="userChat">
          <img
            src="https://images.pexels.com/photos/2065490/pexels-photo-2065490.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="stud"
          />
          <div className="userChatInfo">
            <span>Jane</span>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
