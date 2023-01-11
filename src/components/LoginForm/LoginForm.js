import { color } from "@mui/system";
import React, { useState } from "react";
import "./LoginForm.css";
import 'font-awesome/css/font-awesome.min.css';



document.body.style.backgroundColor = "#990F02";

function Login() {
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
      <div class="icon-container"
      style={{
        position: "absolute",
        right: "10px",
        top: "10px",
        display: "flex",                    

      }}>
    <a href="#" style={{color: "black"}}><i class="fa fa-facebook"></i></a>
    <a href="#"><i class="fa fa-twitter"></i></a>
    <a href="#"><i class="fa fa-instagram"></i></a>
</div>
      <div
        className="page-image"
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: "50%",
          height: "100%",
          backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')",
          backgroundSize: "cover",
          
        }}
      />
      
      <div className="login-form"
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
          
          
        }}>
        <form onSubmit={handleSubmit}>
          <h3 style={{color: "#990F02"}}>GrubHub</h3>
          
          <br />
          <label
          style={{
            display: "flex",
            alignItems: "flex-start",
            paddingTop: "5px",
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
          <label style={{
            display: "flex",
            alignItems: "flex-start",
            paddingTop: "5px",
          }}>Enter Password</label><br />
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
        </form>
      </div>
    
    </div>
  );
}

export default Login;

  // https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
