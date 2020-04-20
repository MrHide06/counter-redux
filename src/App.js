import React from 'react';
import Header from './Components/Header'
import IceCream from './Pages/IceCream'
import Home from './Pages/Home'
import Cakes from './Pages/Cakes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/iceCream">
            <IceCream />
          </Route>
          <Route path="/cakes">
            <Cakes />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
