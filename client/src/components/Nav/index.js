import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import "./index.css";
// import { GiGiantSquid } from "react-icons/gi";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row ">
          <li className="mx-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className=" nav-item active nav-item">
              <Link className="signup" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item nav-item active">
              <Link className="signup" to="/login">
                Login
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
              <img className="logo navbar-brand" src={logo} alt="" />
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
