import React from "react";
import "../../Utils/css/App.css";
import MyImage from "../../Utils/images/logo.png";

function Navbar() {
  // Popup handler function
  const handleClick = (e, linkName) => {
    e.preventDefault(); // page reload ya scroll prevent karne ke liye
    alert(`You clicked on ${linkName} link!`);
  };

  return (
    <div>
      <header>
        <div className="wrapper">
          <div className="logo">
            <a href="#" onClick={(e) => handleClick(e, "Logo")}>
              <img src={MyImage} alt="DevBabu.com" />
            </a>
          </div>
          <div className="navbar">
            <nav>
              <ul>
                <li>
                  <a href="#" onClick={(e) => handleClick(e, "Home")}>Home</a>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleClick(e, "About")}>About</a>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleClick(e, "Services")}>Services</a>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleClick(e, "Contact")}>Contact</a>
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
