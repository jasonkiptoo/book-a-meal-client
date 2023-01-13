import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-custom navbar-expand-lg navbar-dark  py-2 sticky-top navigation">
      <div className="container px-lg-2">
        <Link className="navbar-brand mb-2 ms-auto mb-2 mb-lg-0" to="/dashboard">
          GrubHub
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/assessments"
              >
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/my-orders">
                My Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/order-history">
                Order History
              </Link>
            </li>

          </ul>
        </div>
      </div>

      <li className="navbar-nav ml-auto">

        <i className="nav-link ">Hello Jayson</i>
        <i className="nav-link bi bi-instagram"></i>
        <i className="nav-link bi bi-facebook"> </i>
        <i className="nav-link bi bi-twitter"> </i>

        <button className="btn bg-light">Logout</button>
      </li>
    </nav>
    
  );
};

export default NavigationBar;
