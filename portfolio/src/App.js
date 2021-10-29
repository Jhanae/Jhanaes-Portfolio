import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Pic from "./Pictures/1background.jpg";

function App() {
  return (

    <div className="App">
      <Navbar/>
      <img src={Pic} alt="Pic" className="background"/>
    </div>
    // <Router>
    //   <NavbarTop />
    //   <Switch>
    //     <Route exact path="/home" component={Home}/>
    //     {/* <Route path="/planets" component={() => <PlanetContainer data={planetData}/>} />
    //     <Route path="/distance" component={() => <Distance planets={planetData}/>} />
    //     <Route exact path="/newplanet" component={()=> <AddNewForm setPlanetData={setPlanetData} planetData={planetData}/>}/>
    //     <Route exact path="/about-us" component={About}/> */}
    //   </Switch>
    //   </Router>
  );
}

export default App;
