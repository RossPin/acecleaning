import React from "react";
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src='./images/AceLogo.png' alt='Ace Cleaning' />
        </div>
        <div className="menu">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;