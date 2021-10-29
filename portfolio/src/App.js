import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Pic from "./Pictures/1background.jpg";

function App() {
  return (
    <Router>
      <Navbar />
      <img src={Pic} alt="Pic" className="background"/>
      <Switch>
        <Route exact path="/home" component={Home}/>
      </Switch>
      </Router>
      
  );
}

export default App;
