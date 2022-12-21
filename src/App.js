import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/HomePage";
import NavBarUser from "./components/NavBarUser";

function App() {
  return (
    <div className="App">
     <NavBarUser/>
      <Homepage />

    </div>
  );
}

export default App;
