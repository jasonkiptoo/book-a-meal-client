import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm.jsx";
import Navbar from "./components/NavBar/NavBar.jsx";
import Register from "./components/LoginForm/RegisterForm.jsx";
import AdminHomePage from "./components/HomeAdmin/HomeAdmin.jsx";
import MenuPage from "./components/HomePage/MenuPage.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import Specials from "./components/Specials/Specials.jsx";
import { CartProvider } from "react-use-cart";
import MyOrders from "./components/Orders/MyOrders.jsx";
import OrderHistory from "./components/Orders/OrderHistory";
function App() {
  return (
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
  );
}
export default App;
