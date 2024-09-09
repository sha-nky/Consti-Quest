import React from 'react'
import '../Styles/Home.css'

import { logo } from '../assets'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="header">
      <Link to="/" className='logo'>
        <img src={logo} alt="Logo" />
      </Link>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/team">Team</Link>
        <Link to="/game">Game</Link>
      </nav>
      <div className="icons">
        <i className="fa-solid fa-bars" id="menu-btn"></i>
      </div>
    </header>
  )
}

export default Navbar