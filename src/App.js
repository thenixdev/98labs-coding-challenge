import React from 'react';
import './App.css';
import CheckoutPage from './pages/checkout';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HeaderDesign from './components/design/header'
import HomeComponent from './components/home/homepage';
import XYZPage from './pages/xyz';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <HeaderDesign />
        </header>
          
            <Switch>
              <Route exact path='/' component={HomeComponent} />
              <Route path='/checkout' component={CheckoutPage} />
              <Route path='/xyz' component={XYZPage} />
            </Switch>
          
      </div>
    </Router>
  );
}

export default App;
