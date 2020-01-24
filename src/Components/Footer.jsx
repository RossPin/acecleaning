import React from "react";
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>        
      </div>
    );
  }
}

export default Footer;