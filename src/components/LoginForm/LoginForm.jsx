import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

// document.body.style.backgroundColor = "#990F02";

function Login({ onLogin}) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   fetch(`http://127.0.0.1:3000/login`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${localStorage.getItem("token")}`
  //     },
  //     body: JSON.stringify({ email, password }),
  //   }).then((res) => {
  //     if (res.ok) {
  //       res.json().then((user) => {
  //         console.log({user})
  //         onLogin(user.last_name)
  //         return navigate("/home")
  //       });
  //     } else {
  //       res.json().then((err) => setErrors(err.errors));
  //     }
  //   });
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://grub-hub.onrender.com/login", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.jwt);
        // redirect to the home page
        navigate("/home");
      })
      .catch((error) => {
        setErrors(error.response.data.errors);
      });
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="Login">
      <div
        className="page-image"
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: "50%",
          height: "100vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')",
          backgroundSize: "cover",
        }}
      >
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
        </div>
      </div>

      <div
        className="login-form"
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          top: "27%",
          right: "60%",
          width: "25%",
          height: "50%",
          backgroundColor: "white",
          borderRadius: "30px",
          color: "black",
          fontSize: "16px",
          fontWeight: "lighter",
        }}
      >
        <form onSubmit={handleSubmit}>
        {/* display errors */}
          {/* {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))} */}
          <h3 style={{ color: "#990F02" }}>GrubHub</h3>
          <br />
          <label
            style={{
              display: "flex",
              alignItems: "flex-start",
              paddingTop: "5px",
              marginBottom: "-22px",
            }}
          >
            Username
          </label>{" "}
          <br />
          <input
            type="text"
            name="username"
            value={user.email}
            onChange={handleChange}
            required
            style={{
              border: "0px",
              borderRadius: "30px",
              backgroundColor: "#E4E4E4",
              width: "100%",
              height: "30px",
            }}
          />
          <br />
          <label
            style={{
              display: "flex",
              alignItems: "flex-start",
              paddingTop: "5px",
              marginBottom: "-22px",
            }}
          >
            Password
          </label>
          <br />
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
            style={{
              border: "0px",
              borderRadius: "30px",
              backgroundColor: "#E4E4E4",
              width: "100%",
              height: "30px",
            }}
          />
          <br />
          <h6 className="errorhead text-danger">
            {" "}
            {errors.map((error) => error)}{" "}
          </h6>
          <a href="#" style={{ color: "#990F02", textDecoration: "none" }}>
            Forgot Password?
          </a>
          <br />
          <br />
          <input
            type="submit"
            value="Login"
            style={{
              border: "0px",
              borderRadius: "30px",
              backgroundColor: "#990F02",
              width: "100%",
              height: "30px",
              color: "white",
              fontWeight: "bold",
            }}
          />
          <br />
          <p
            style={{
              color: "#990F02",
              paddingTop: "8px",
              display: "flex",
              fontSize: "16px",
            }}
          >
            {" "}
            Don't have an account?{" "}
            <a href="/register" style={{ color: "#000", fontWeight: "normal" }}>
              <Link to="/register">Register </Link>
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
