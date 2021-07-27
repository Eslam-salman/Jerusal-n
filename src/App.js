
import './App.css';
import NavBar from './Components/NavBar';
import CarneSection from './Components/CarneSection';
import Management from './Components/Management';
import VerdurasSection from './Components/VerdurasSection';
import OfertasSection from './Components/OfertasSection';
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Link, NavLink,Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    
     <Route path="/Carne" exact component={CarneSection} />
        <Route path="/VERDURA" exact component={VerdurasSection} />
        <Route path="/Alimentos" exact component={OfertasSection} />
        <Route path="/Management" exact component={Management} />
    
    </div>
   </Router>
  );
}

export default App;
