import React from "react";
import "../../Utils/css/App.css";
import MyImage from "../../Utils/images/logo.png";

function Navbar() {
  return (
    <div>
      <header>
        <div className="wrapper">
          <div className="logo">
            <a href="#">
              <img src={MyImage} alt="DevBabu.com" />
            </a>
          </div>
          <div className="navbar">
            <nav>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="menu-bar">
            <button>
              <i />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
