import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
///import axios from 'axios';
import { Route, Switch } from "react-router-dom";
import Nav from './pizza/Nav';
import Home from './pizza/Home';
import Pizza from './pizza/PizzaForm';
import Confirm from './pizza/Confirm';





function App() {
  return (
    <div>
      <Nav />

        <Route path='/'>
          <Home />
        </Route>
        <Route path='/pizza'>
         <Pizza />
        </Route>
        <Route path='/pizza'>
         <Confirm />
        </Route>
       
    </div>
  );
}

//movies={movieList}
//exact
export default App;
