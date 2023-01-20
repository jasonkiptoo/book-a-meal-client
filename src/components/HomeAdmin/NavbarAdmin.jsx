import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaShoppingCart } from "react-icons/fa";
import { useCart } from "react-use-cart";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = ({ current }) => {
  const [activePage, setActivePage] = useState("homepage");
  let homepage = activePage === "homepage" ? "active" : "homepage";
  let menupage = activePage === "menupage" ? "active" : "menupage";
  let orders = activePage === "orders" ? "active" : "orders";
  let orderhistory = activePage === "orderhistory" ? "active" : "";

  const [user, setUser] = useState(null);
  
  ;

  useEffect(() => {
    fetch("http://127.0.0.1:3000/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user.user.username));
      }
    });
  }, []);
  return (
    <nav className="fixed-top"
      style={{
        backgroundColor: "#990F02",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        height: "70px",
      }}
    >
      <div
        className="nav-left"
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "-5rem",
        }}
      >
        <Link
          to="/homepage"
          className={homepage}
          onClick={() => setActivePage("homepage")}
          style={{
            color: activePage === "homepage" ? "black" : "white",
            textDecoration: "none",
            padding: "20px",
          }}
        >
          Home
        </Link>
        <Link
          to="/menupage"
          className={menupage}
          onClick={() => setActivePage("menupage")}
          style={{
            color: activePage === "homepage" ? "black" : "white",
            textDecoration: "none",
            padding: "20px",
          }}
        >
          Menu
        </Link>

        <Link
          to="/orders"
          className={orders}
          onClick={() => setActivePage("orders")}
          style={{
            color: activePage === "orders" ? "black" : "white",
            textDecoration: "none",
            padding: "20px",
          }}
        >
          Orders
          




        </Link>
        <Link
          to="/order-history"
          className={orderhistory}
          onClick={() => setActivePage("orderhistory")}
          style={{
            color: activePage === "orderhistory" ? "black" : "white",
            textDecoration: "none",
            padding: "20px",
          }}
        >
          Order History
        </Link>
      </div>
      <div
        className="nav-center"
        style={{
          display: "flex",
          alignItems: "center",
          color: "white",
          marginLeft: "-7rem",
        }}
      >
        Hello {user} &#128522;
      </div>
      <div
        className="nav-right"
        style={{
          display: "flex",
          alignItems: "center",
          marginRight: "-7rem",
        }}
      >
        <div className="social-icons">
        
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
            <Link
              to="/login"
              className={orderhistory}
              onClick={() => setActivePage("orderhistory")}
              style={{
                color: "black",
                textDecoration: "none",
              }}
            >
              LOGOUT
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
