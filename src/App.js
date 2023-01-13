import "./App.css";
import Homepage from "./components/HomePage";
import NavBarUser from "./components/NavBarUser";
import Specials from "./components/Specials/Specials";

function App() {
  return (
    <div className="App">
    <Specials/>
     <NavBarUser/>
      <Homepage />

    </div>
  );
}

export default App;
