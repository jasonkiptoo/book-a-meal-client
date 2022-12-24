import React, { useState } from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const LoginPage = () => {
  return (
    <div className="login-page">
      <h1>GrubHub</h1>
      <form>
  <label>Username:</label><br />
  <input type="text" placeholder="Enter username" />
  <br />
  <label>Password:</label><br />
  <input type="password" placeholder="Enter password" />
  <br /><br />
  <button type="submit">Login</button>
</form>
    </div>
  );
};

export default LoginPage;
