// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, redirect } from "react-router-dom";
// import Homepage from "./components/HomePage";
import LoginForm from "./components/LoginForm/LoginForm.jsx";

import NavBar from "./components/NavBar/NavBar.jsx";

import Register from "./components/LoginForm/RegisterForm.jsx";

import Home from "./components/Home/Home.jsx";

function App() {
  const [user, setUser] = useState(null);

  function handleLogin(user) {
    setUser(user)
  }
  return (
    <div className="App">

      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login"element={<LoginForm onLogin={handleLogin} />} />
        <Route exact path="/home" element={<Home user={user}  />} />
      </Routes>

    </div>
  );
}

export default App;




