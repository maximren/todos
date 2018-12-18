import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends PureComponent {
  render() {
    return (
      <nav className="nav-wrapper blue">
        <div className="container">
          <div className="brand-logo">My Todo's</div>
          <ul className="right">
            <li><Link to="/">Own stuff</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/work">Work</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;