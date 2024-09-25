import React from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart from '../Assets/cart_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
        <img src={logo} alt="" />
        <p>DELL <br />Shop</p>
        </div>
      <ul className="nav-menu">
        <li>shop <hr /></li>
        <li>men</li>
        <li>women</li>
        <li>kids</li>
      </ul>
      <div className="nav-cart">
        <button>Login</button>
        <img src={cart} alt="" />
      <div className="nav-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
