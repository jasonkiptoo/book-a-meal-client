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
import AdminHomePage from "./components/HomeAdmin/HomeAdmin.jsx";
import MenuPage from "./components/HomePage/MenuPage.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import Specials from "./components/Specials/Specials.jsx";
import { CartProvider } from "react-use-cart";
import MyOrders from "./components/Orders/MyOrders.jsx";
import OrderHistory from "./components/Orders/OrderHistory";
import NavbarAdmin from "./components/HomeAdmin/NavbarAdmin.jsx";
import Products from "./components/Products/Products";
// import AdminHomePage from "./components/HomeAdmin/HomeAdmin.jsx";
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
      <div>
      <CartProvider>
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/" element={<LoginForm />} />
          <Route exact path="/admin" element={<AdminHomePage />} />
          <Route exact path="/menu" element={<MenuPage />} />
          <Route exact path="/my-orders" element={<MyOrders />} />
          <Route exact path="/order-history" element={<OrderHistory />} />
          <Route exact path="/navbar" element={<Navbar />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/navbar" element={<Navbar />} />
          <Route exact path="/specials" element={<Specials />} />
        </Routes>
      </CartProvider>
    </div>


      <Routes>
        {/* < NavbarAdmin /> */}
        <Route path = "/adminhome" element = {<AdminHomePage />} />
        <Route path = "/menu" element = {<HomePage/>} />
        <Route path = "/products" element = {<Products/>} />
      </Routes>
    </div>
  );
}
export default App;
