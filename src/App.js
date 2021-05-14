import React from 'react';
import {Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './components/shop/shop.component';
import Header from './components/Header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import {auth} from './firebase/firebase.util';

class App extends React.Component {

constructor(props){
  super(props);
  this.state = {
    currentUser : null
  }
}

unSubscribeFromAuth  = null;

componentDidMount(){
  this.unSubscribeFromAuth = auth.onAuthStateChanged(user=> {
  this.setState({currentUser:user});
  
console.log(user);
});
}

componentWillUnmount(){
  this.unSubscribeFromAuth();
}

  render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser}></Header>
      <Switch>
    <Route exact path='/' component={HomePage}></Route>
    <Route exact path='/Shop' component={ShopPage}></Route>
    <Route exact path='/SignIn' component={SignInAndSignUpPage}></Route>

    </Switch>
    </div>
   // <div><HomePage></HomePage></div>
  );
}
}

export default App;
