// import logo from "./logo.svg";
import React from 'react'
import ReactDOM from 'react-dom'
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, redirect } from "react-router-dom";
// import Homepage from "./components/HomePage";
import LoginForm from "./components/LoginForm/LoginForm.jsx";

import Navbar from "./components/NavBar/NavBar.jsx";

import Register from "./components/LoginForm/RegisterForm.jsx";

import Home from "./components/Home/Home.jsx";
import AdminHomePage from "./components/HomeAdmin/HomeAdmin.jsx";
import HomeAdmin from "./components/HomeAdmin/HomeAdmin.jsx";
import Menu from "./components/HomePage/Menu.jsx";
import Specials from "./components/Specials/Specials.jsx";


function App() {
  const [user, setUser] = useState(null);

  // function handleLogin(user) {
  //   setUser(user)
  // }

  // useEffect(() => {
  //   fetch("http://127.0.0.1:3000/profile",{
  //     headers: {
  //       "Authorization": `Bearer ${localStorage.getItem('token')}`
  //     }
  //   })
  //   .then((response) => {
  //     if (response.ok) {
  //       response.json()
  //       .then((user) => setUser(user.user.username));
  //     }
  //   });
  // }, []);

  // function handleLogin(user) {
  //   setUser(user);
  // }

  // function handleLogout() {
  //   setUser(null);
  // }

  // console.log(user)
  return (
    <div>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login"element={<LoginForm />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/admin" element={<HomeAdmin />} />
        <Route exact path="/menu" element={<Menu/>} />
        <Route exact path="/navbar" element={<Navbar />} />
        <Route exact path="/specials" element={<Specials />} />
        <Route exact path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;




