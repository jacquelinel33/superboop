import React from 'react';
import Nav from './components/Nav/Nav';
import Products from './components/Products/Products';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductScreen from './components/Products/ProductScreen';

const App = () => {

  return (
  <BrowserRouter>
  <div className='site-container'>
    <header>
      <Nav/>
    </header>
    <main>
      <Route path='/' component={Products} exact></Route>
      <Route path='/product/:id' component={ProductScreen}></Route>
    </main>
  </div>
  </BrowserRouter>
  )
}

export default App

