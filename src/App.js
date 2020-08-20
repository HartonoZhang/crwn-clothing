  
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/hompage/homepage.component';
import ShopData from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import Header from './component/header/header.component';

import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser : null
    };
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
         this.setState({
           currentUser: {
             id: snapShot.id,
             ...snapShot.data()
           }
         });
        });
      }
      this.setState({ currentUser: userAuth});
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopData} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;