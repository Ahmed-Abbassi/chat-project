import React from "react";

const Navbar = () => {
  return (
    <div className="navBar">
      <span className="logo">Lama chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/2065490/pexels-photo-2065490.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="i"
        />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
