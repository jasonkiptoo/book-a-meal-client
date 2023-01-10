import React, { useState } from "react";


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
    <div>
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
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}

export default Login;

  // https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
