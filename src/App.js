// import logo from "./logo.svg";
import "./App.css";
// import Homepage from "./components/HomePage";
import LoginForm from "./components/LoginForm/LoginForm.js";
import Register from "./components/LoginForm/RegisterForm.js";
// import NavBarUser from "./components/NavBarUser";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home.js";

function App() {
  return (
    <div className="App">
      <LoginForm />
      {/* <Register /> */}
      <Home />

    </div>
  );
}

export default App;
