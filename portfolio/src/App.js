import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Pic from "./Pictures/backgro.jpg";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Links from "./Components/Links";
import Resume from "./Components/Resume";

function App() {
  return (
    <Router>
      <Navbar />
      <img src={Pic} alt="Pic" className="background"/>
      <Switch>
        <Route exact path="/Jhanaes-Portfolio/" component={Home}/>
        <Route exact path="/Jhanaes-Portfolio/links" component={Links}/>
        <Route exact path="/Jhanaes-Portfolio/resume" component={Resume}/>
        <Route exact path="/Jhanaes-Portfolio/projects" component={Projects}/>
        <Route exact path="/Jhanaes-Portfolio/about" component={About}/>
      </Switch>
      </Router>
      
  );
}

export default App;
