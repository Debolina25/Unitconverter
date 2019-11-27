import React from 'react';
import HomePage from './Container/HomePage';
import Frequency from './Container/Frequency';
import Voltage from './Container/Voltage';
 import Length from './Container/Length';
 import Temperature from './Container/Temperature';
 import Weight from './Container/Weight';
 import Time from './Container/Time';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    
    <div >
      <Router>
        <Switch>
          <Route exact path={"/"} component={HomePage}/> 
          <Route path={"/frequency"} component={Frequency}/>
          <Route exact path={"/voltage"} component={Voltage}/>
          <Route exact path={"/length"} component={Length}/>
          <Route path={"/temp"} component={Temperature}/>
          <Route path={"/weight"} component={Weight}/>
          <Route path={"/time"} component={Time}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
