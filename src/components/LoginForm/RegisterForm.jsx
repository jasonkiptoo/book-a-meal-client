import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp} from "react-icons/fa";






document.body.style.backgroundColor = "#990F02";


function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      // send a request to the server to authenticate the user
      const response = await fetch("/authenticate", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });

      // parse the response from the server
      const data = await response.json();

      // check if the authentication was successful
      if (data.token) {
        // if the authentication was successful, store the token in the browser's local storage
        localStorage.setItem("token", data.token);
        // redirect the user to the protected page
        window.location.href = "/protected";
      } else {
        // if the authentication was not successful, display an error message
        alert("Invalid username or password");
      }
    } catch (err) {
      console.error(err);
    }
  }

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
          backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')",
          backgroundSize: "cover",

        }}

      ><div className="social-container"
      style={{
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "flex-end",
        marginRight: "4rem",
        marginTop: "1rem"


      }}>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{
            color: 'white',
            marginRight: '1rem'
        }}>
            {/* <FontAwesomeIcon icon={faTwitter} size="2x" /> */}
            <FaTwitter  size= "30px"/>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{
            color: 'white',
            marginRight: '1rem'
        }}>
            {/* <FontAwesomeIcon icon={faInstagram} size="2x" /> */}
            <FaInstagram size= "30px" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{
            color: 'white'
        }}>
            {/* <FontAwesomeIcon icon={faFacebook} size="2x" /> */}
            <FaFacebook size= "30px" />
        </a>

      </div></div>


      <div className="login-form"
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


        }}>
        <form onSubmit={handleSubmit}>
          <h3 style={{color: "#990F02"}}>GrubHub</h3>
          <br />
          <label
          style={{
            display: "flex",
            alignItems: "flex-start",
            paddingTop: "5px",
            marginBottom: "-22px",
          }}>Enter Username</label> <br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          }}>Email Address</label> <br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          }}>Username</label> <br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <label style={{
            display: "flex",
            alignItems: "flex-start",
            paddingTop: "5px",
            marginBottom: "-22px",
          }}>Password</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          }}>Confirm Password</label> <br />
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
          />
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
          <p style={{
            color: "#990F02",
            paddingTop: "8px",
            display: "flex",
            fontSize: "16px",

          }}> Already have an account? <a href="#" style={{color: "#000", fontWeight: "normal"}}>Login</a></p>
        </form>
      </div>

    </div>
  );
}

export default Register;


