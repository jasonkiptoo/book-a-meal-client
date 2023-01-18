import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

// document.body.style.backgroundColor = "#990F02";

function Register() {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    axios
      // .post("https://grub-hub.onrender.com/register", {
      .post("http://127.0.0.1:3000/register", {
        email: user.email,
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.jwt);
        // redirect to the profile page
        navigate("/login");
      })
      .catch((error) => {
        if (error.response) {
          setErrors(error.response.data.errors);
        } else {
          setErrors(["Something went wrong, please try again later"]);
        }
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
          top: "17%",
          right: "60%",
          width: "25%",
          height: "70%",
          backgroundColor: "white",
          borderRadius: "30px",
          color: "black",
          fontSize: "16px",
          fontWeight: "lighter",
        }}
      >
        <form onSubmit={handleSubmit}>

          {errors.map((error, index) => (
            <p style={{color: "red"}} key={index}>{error}</p>
          ))}
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
            value={user.name}
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
            Email Address
          </label>{" "}
          <br />
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={user.email}
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
            onChange={handleChange}
            value={user.password}
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
          {/* <label
            style={{
              display: "flex",
              alignItems: "flex-start",
              paddingTop: "5px",
              marginBottom: "-22px",
            }}
          >
            Confirm Password
          </label>{" "}
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              border: "0px",
              borderRadius: "30px",
              backgroundColor: "#E4E4E4",
              width: "100%",
              height: "30px",
            }}
          /> */}
          <br />
          <br />
          <input
            type="submit"
            value="Register"
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
            Already have an account?{" "}
            <a style={{ color: "#000", fontWeight: "normal" }}>
              <Link to="/login">Login</Link>
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
