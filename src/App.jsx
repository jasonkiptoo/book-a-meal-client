// import logo from "./logo.svg";
import "./App.css";
// import Homepage from "./components/HomePage";
import LoginForm from "./components/LoginForm/LoginForm.jsx";

import NavBar from "./components/NavBar/NavBar.jsx";

import Register from "./components/LoginForm/RegisterForm.jsx";

import Home from "./components/Home/Home.js";

function App() {
  return (
    <div className="App">

       <NavBar />
      

      <LoginForm />
      {/* <Register /> */}
//       <Home />


    </div>
  );
}

export default App;




