import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/menu" className="nav-link">Menu</Link>
          </li>
          <li className="nav-item">
            <Link to="/my-orders" className="nav-link">My Orders</Link>
          </li>
          <li className="nav-item">
            <Link to="/order-history" className="nav-link">Order History</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-nav ml-auto">
        <a href="#" className="nav-link"><FaInstagram /></a>
        <a href="#" className="nav-link"><FaFacebook /></a>
        <a href="#" className="nav-link"><FaTwitter /></a>
        <a href="#" className="nav-link">Logout</a>
      </div>
    </nav>
  );
}

export default NavigationBar;
