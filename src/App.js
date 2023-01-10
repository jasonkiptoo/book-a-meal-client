import './App.css';
import NavBar from "./components/NavBar/NavBar"
import Home from './components/Home/Home';
import Specials from './components/Home/Special';

function App() {
  return (
    <div className="App">
      
     <NavBar />
     <Specials />
     <Home />
    
    </div>
  );
}

export default App;
