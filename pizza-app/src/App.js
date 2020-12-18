import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
///import axios from 'axios';
import { Route, Switch } from "react-router-dom";
import Home from './pizza/Home';
import Pizza from './pizza/PizzaForm';
import Confirm from './pizza/Confirm';




function App() {
  return (
    <div>
      <Switch>
        <Route path='/pizza'>
         <Confirm />
        </Route>
        <Route path='/pizza'>
         <Pizza />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

//movies={movieList}
//exact
export default App;
