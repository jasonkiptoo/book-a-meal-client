import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-custom navbar-expand-sm navbar-dark  py-2 sticky-top navigation">
      <div className="container px-lg-2">
        {/* <div  className="container1"> */}
        {/* <Link className="navbar-brand mb-2 ms-auto mb-2 mb-lg-0" to="/dashboard">
          GrubHub
        </Link> */}
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

      <div className="container-user">Hello Jayson </div>
      <div
        className="social-container"
        style={{
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "4rem",
          marginTop: "1rem",
        }}
      >
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
            marginRight: "1rem",
          }}
        >
          {/* <FontAwesomeIcon icon={faTwitter} size="2x" /> */}
          <FaTwitter size="30px" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
            marginRight: "1rem",
          }}
        >
          {/* <FontAwesomeIcon icon={faInstagram} size="2x" /> */}
          <FaInstagram size="30px" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
          }}
        >
          {/* <FontAwesomeIcon icon={faFacebook} size="2x" /> */}
          <FaFacebook size="30px" />
        </a>
        <button
          className="btn bg-light"
          style={{
            width: "100px",
            color: "#990F02",
            backgroundColor: "white",
            marginLeft: "1rem",
            marginTop: "-5px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          LOGOUT
        </button>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default NavigationBar;
