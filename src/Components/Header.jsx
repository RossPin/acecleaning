import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <h1>Ace Cleaning</h1> 
        </div>
        <div className="menu">
          <ul>
            <li>Home</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;