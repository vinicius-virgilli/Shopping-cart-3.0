import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';

function App() {
  return (

    <Switch>
      <Route exact path="/" render={() => <ProductList />} />
      <Route exact path="/cart" render={() => <Cart />} />
    </Switch>

  );
}

export default App;
