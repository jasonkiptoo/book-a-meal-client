// import logo from "./logo.svg";
import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  redirect,
} from "react-router-dom";
// import Homepage from "./components/HomePage";
import LoginForm from "./components/LoginForm/LoginForm.jsx";

import Navbar from "./components/NavBar/NavBar.jsx";

import Register from "./components/LoginForm/RegisterForm.jsx";

import Home from "./components/Home/Home.jsx";

import HomeAdmin from "./components/HomeAdmin/HomeAdmin.jsx";

import MenuPage from "./components/HomePage/MenuPage.jsx";

import HomePage from "./components/HomePage/HomePage.jsx";
import Specials from "./components/Specials/Specials.jsx";
import { CartProvider } from "react-use-cart";
import MyOrders from "./components/Orders/MyOrders.jsx";

function App() {
  const [user, setUser] = useState(null);

  // function handleLogin(user) {
  //   setUser(user)
  // }

  // const currentUser = () => {
  //   useEffect(() => {
  //     fetch('http://127.0.0.1:3000/profile', {
  //       headers : {
  //         "Authorization": `Bearer ${localStorage.getItem('token')}`
  //       }
  //     })
  //     .then(res => res.json())
  //     .then(data => setUser(data))
  //     .catch(err => alert(err))
  //   }, [])
  // }

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

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }

  console.log(user);
  return (
    <div>
      <CartProvider>
        <Routes>
          <Route exact path="/register" element={<Register />} />
          {/* <Route exact path="/login"element={<LoginForm onLogin={handleLogin} />} /> */}
          <Route
            exact
            path="/login"
            element={<LoginForm onLogin={handleLogin} />}
          />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/admin" element={<HomeAdmin />} />
          <Route exact path="/menu" element={<MenuPage />} />
          <Route exact path="/my-orders" element={<MyOrders />} />
          <Route exact path="/navbar" element={<Navbar user={user} />} />
          <Route exact path="/homepage" element={<HomePage />} />
          {/* <Route exact path="/navbar" element={<Navbar user={user} current={currentUser}/>} /> */}
          <Route exact path="/specials" element={<Specials />} />

          <Route
            exact
            path="/navbar"
            element={
              <Navbar
                user={user}
                onLogout={handleLogout}
                onLogin={handleLogin}
              />
            }
          />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
