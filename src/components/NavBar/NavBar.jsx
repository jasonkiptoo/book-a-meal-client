import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaShoppingCart } from "react-icons/fa";
import { useCart } from "react-use-cart";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = ({ current }) => {
  const [activePage, setActivePage] = useState("homepage");
  let homepage = activePage === "homepage" ? "active" : "homepage";
  let myorders = activePage === "myorders" ? "active" : "";
  let orderhistory = activePage === "orderhistory" ? "active" : "";

  const [user, setUser] = useState(null);
  const { totalItems } = useCart();

  function handleDelete(){
    localStorage.removeItem( "token")
    localStorage.removeItem( "react-use-cart")
  }

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
    <nav className="fixed-top mb-4"
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
          Menu
        </Link>

        <Link
          to="/my-orders"
          className={myorders}
          onClick={() => setActivePage("myorders")}
          style={{
            color: activePage === "myorders" ? "black" : "white",
            textDecoration: "none",
            padding: "20px",
          }}
        >
          My orders
          <span class="badge badge-light text-dark ms-2" style={{backgroundColor: "yellow", borderRadius: "95%"}}>{totalItems}</span>




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
        {/* <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              marginRight: "1rem",
            }}
          >
            <FaShoppingCart size="30px" />
          </a> */}
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
              onClick={() => {handleDelete()}}
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
