import React from 'react';
import {Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () =>(
<div>
  <h1>Hats page</h1>
</div>

)

function App() {
  return (
    <div>
      <Switch>
    <Route exact path='/' component={HomePage}></Route>
    <Route exact path='/Hats' component={HatsPage}></Route>
    </Switch>
    </div>
   // <div><HomePage></HomePage></div>
  );
}

export default App;
