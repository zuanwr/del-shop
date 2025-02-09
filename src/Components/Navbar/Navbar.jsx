import React, { useState } from "react";
import "./Navbar.css";

import logo from "../Assets/logo.png";
import cart from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState();

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>
          DELL <br />
          Shop
        </p>
      </div>

      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >

          <Link style={{ textDecoration: "none" }} to="/">
            shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}{" "}
        </li>

        <li
          onClick={() => {
            setMenu("mens");
          }}
        >

          <Link style={{ textDecoration: "none" }} to="/mens">
            men
          </Link>{" "}
          {menu === "mens" ? <hr /> : <></>}{" "}
        </li>

        <li
          onClick={() => {
            setMenu("womens");
          }}
        >

          <Link style={{ textDecoration: "none" }} to="/womens">
            women
          </Link>{" "}

          {menu === "womens" ? <hr /> : <></>}{" "}
        </li>

        <li
          onClick={() => {
            setMenu("kids");
          }}
        >

          <Link style={{ textDecoration: "none" }} to="/kids">
            kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}{" "}
        </li>
      </ul>

      <div className="nav-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/cart">
          <img src={cart} alt="" />
        </Link>
        
        <div className="nav-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
