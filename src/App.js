  
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/hompage/homepage.component';
import ShopData from './pages/shop/shop.component.jsx'

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopData} />
        </Switch>
      </div>
    );
  }
}

export default App;