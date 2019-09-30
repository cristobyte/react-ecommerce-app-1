import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import TiendaPage from './pages/tienda/tienda';

class App extends Component {
  render() {
    return <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/tienda/' component={TiendaPage} />
      </Switch>
    </div>;
  }
}

export default App;
