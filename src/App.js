import './App.css';
import NavBar from "./components/NavBar/NavBar"
import Home from './components/Home/Home';
import Specials from './components/Home/Special';
import OrderSummaryCard from './components/Cards/order-summary-card';

function App() {
  return (
    <div className="App">

     {/* <NavBar />
     <Specials />
     <Home /> */}

     <OrderSummaryCard/>

    </div>
  );
}

export default App;
