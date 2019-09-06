import React from 'react';
import Home from './hom'
import Team from './team'
import Boutique from './boutique'
import Calendrier from './calendrier'
import Admin from './admin'
import {Route,Switch} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';



function App() {
  return (<Router>
    <div>
      <Route>
      <Switch >
        <Route exact path="/" component={Home}/>
        <Route exact path= "/team" component={Team}/>
        <Route exact path="/Boutique" component={Boutique}/>
        <Route exact path="/Calendrier" component={Calendrier}/>
        <Route exact path="/admin" component={Admin }/>
        {/*<Route exact path="/Meseum" component={Museum}/>
        <Route component={Error} /> */}
      </Switch>
      </Route>
      
      
    </div>
    </Router>
  );
}

export default App;
