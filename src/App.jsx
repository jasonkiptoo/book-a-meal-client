import React from 'react'
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm.jsx";

import Navbar from "./components/NavBar/NavBar.jsx";

import Register from "./components/LoginForm/RegisterForm.jsx";

import Home from "./components/Home/Home.jsx";

import HomeAdmin from "./components/HomeAdmin/HomeAdmin.jsx";

import MenuPage from "./components/HomePage/MenuPage.jsx";

import HomePage from "./components/HomePage/HomePage.jsx";
import Specials from "./components/Specials/Specials.jsx";
import {CartProvider} from "react-use-cart"
import MyOrders from './components/Orders/MyOrders.jsx';



function App() {
  return (
    <div>
      <CartProvider>
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login"element={<LoginForm />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/admin" element={<HomeAdmin />} />
          <Route exact path="/menu" element={<MenuPage />} />
          <Route exact path="/my-orders" element={<MyOrders />} />
          <Route exact path="/navbar" element={<Navbar />} />
          <Route exact path="/homepage" element={<HomePage />} />
          <Route exact path="/navbar" element={<Navbar />} />
          <Route exact path="/specials" element={<Specials />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;




