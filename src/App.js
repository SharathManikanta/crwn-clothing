import React from 'react';
import {Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './components/shop/shop.component';
import Header from './components/Header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import {auth,createUserProfileDocument} from './firebase/firebase.util';

class App extends React.Component {

constructor(props){
  super(props);
  this.state = {
    currentUser : null
  }
}

unSubscribeFromAuth  = null;

componentDidMount(){
  this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth=> {
    if(userAuth){
      const userRef  = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot=>{
        this.setState({
          currentUser:{
            id:snapShot.id,
            ...snapShot.data()
          }
        },()=>console.log(this.state));
      });
    }else{
      this.setState({currentUser: userAuth});
    }
    //this.setState({currentUser:user});
  
  //createUserProfileDocument(user);
//console.log(userAuth);
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
