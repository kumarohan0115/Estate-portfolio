import React from 'react'
import './Navbar.css';
import logo from '../Assets/logo.png'
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img id='logo' src={logo} alt="Real Estate Logo" />
          <h2>eState</h2>
        </div>
      
        <div className="Navlist">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Listing</a></li>
            <li><a href="/">Resourses</a></li>
            <li><a href="/">Luxary</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar