import React from 'react';
import {Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './components/shop/shop.component';




function App() {
  return (
    <div>
      <Switch>
    <Route exact path='/' component={HomePage}></Route>
    <Route exact path='/Shop' component={ShopPage}></Route>
    </Switch>
    </div>
   // <div><HomePage></HomePage></div>
  );
}

export default App;
