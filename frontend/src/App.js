import React from 'react'
import data from './data'
import Nav from './components/Nav'
import Product from './components/Products/Products'

const App = () => {

  return (
  <div className='container'>
    <header>
      <Nav/>
    </header>
    <main>
      <div>
        <Product data={data}/>
      </div>
      
    </main>
  </div>

  )
}

export default App

