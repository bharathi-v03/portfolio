import './App.css';
import { BrowserRouter as Router } from "react-router-dom"
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
        <About />
      </Router>
    </div>
  );
}

export default App;
