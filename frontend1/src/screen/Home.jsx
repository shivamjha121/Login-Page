import React from "react";
import img from '../img/img.svg';

function Home() {
const name=localStorage.getItem("name");

  return (
    <div>
      <div className="login-container">
        <div className="user-image-container">
          {/* Add circular user image here */}
          <img src={img} alt="User" className="user-image" />
        </div>
        <h1 className="login-header">Welcome!</h1>
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default Home;
