import './App.css';
import { BrowserRouter as Router } from "react-router-dom"
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Project from './Components/Project';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
        <About />
        <Project />
      </Router>
    </div>
  );
}

export default App;
