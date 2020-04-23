import React from 'react';
import Header from './Components/Header'
import IceCream from './Pages/IceCream'
import Home from './Pages/Home'
import Cakes from './Pages/Cakes'
import Api from './Pages/Api'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Mock from './Pages/MockApi'
import Cart from './Pages/Hook'
import CatalogMovie from './Context/CatalogContext'
import MovieFunction from './Pages/MovieFunction'
import MovieClass from './Pages/MovieClass'

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
          <Route path="/api">
            <Api />
          </Route>
          <Route path="/mock">
            <Mock />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <CatalogMovie>
            <Route path="/moviefunction">
              <MovieFunction />
            </Route>
            <Route path="/movieclass">
              <MovieClass />
            </Route>
          </CatalogMovie>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
