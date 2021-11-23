import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import "./index.css";
import navbutton from "../../btn.png";
import logout from "../../logout.png";
import triangle from "../../triangle.png";
import Square from "../../square.png";
// import { GiGiantSquid } from "react-icons/gi";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="navbar-nav">
          <li className="nav-item active nav-item">
            <Link className="logout" to="/orderHistory">
              <img className="navbutton" src={Square} alt="logout-button" />
              <span className="sss">Order History </span>
            </Link>
          </li>
          <li className="nav-item active nav-item">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a className="logout" href="/" onClick={() => Auth.logout()}>
              <img className="navbutton" src={logout} alt="logout-button" />
              <span className="sss">Logout</span>
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <div className="collapse navbar-collapse ">
          <ul className="navbar-nav">
            <li className=" nav-item active nav-item">
              <Link className="signup" to="/signup">
                <img className="navbutton" src={navbutton} alt="" />
                <span className="sss">Signup</span>
              </Link>
            </li>
            <li className="nav-item nav-item active">
              <Link className="signup" to="/login">
                <img className="navbutton" src={triangle} alt="" />
                <span className="sss">Login</span>
              </Link>
            </li>
          </ul>
        </div>
      );
    }
  }

  return (
    <header className="navbar  navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <h1>
          <Link to="/">
            <span>
              <img
                className="logo navbar-brand"
                src={logo}
                alt="squid-store-logo"
              />
            </span>
          </Link>
        </h1>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <nav className="navbar-item">{showNavigation()}</nav>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Nav;
