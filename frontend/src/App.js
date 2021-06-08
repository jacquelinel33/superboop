import React from 'react';
import Nav from './components/Nav/Nav';
import Products from './components/Products/Products-Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductPage from './components/Products/ProductPage';
import Cart from './components/cart/Cart';

const App = () => {

  return (
  <BrowserRouter>
  <div className='site-container'>
    <header>
      <Nav/>
    </header>
    <main>
      <Switch>
        <Route path="/cart/:id?" component={Cart}/>
        <Route exact path="/" component={Products}/>
        <Route path="/product/:id" component={ProductPage}/>
      </Switch>
    </main>
  </div>
  </BrowserRouter>
  )
}

export default App

