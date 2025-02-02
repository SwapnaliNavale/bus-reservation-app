import React from "react";
import { Link, Links } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/">
                <img
                  className="img-fluid h-3"
                  src="../assets/logo.png"
                  alt="logo"
                />
              </Link>

              {/* <a className="navbar-brand" href="#">WebSiteName</a> */}
            </div>
            <ul className="nav navbar-nav">
              {/* <li className="active">
                <Link to="#">Home</Link>
              </li> */}
              <li className="dropdown">
                <Link className="dropdown-toggle" data-toggle="dropdown" to="#">
                  Page 1 <span className="caret"></span>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="#">Page 1-1</Link>
                  </li>
                  <li>
                    <Link to="#">Page 1-2</Link>
                  </li>
                  <li>
                    <Link to="#">Page 1-3</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/login">
                  <span className="glyphicon glyphicon-user"></span> Sign Up
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <span className="glyphicon glyphicon-log-in"></span> Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
