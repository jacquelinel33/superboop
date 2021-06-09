import { NavLink } from 'react-router-dom';

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

const Nav = () => {
  return (
    <div className='nav'>
      <div className='_left'>
        <NavLink to='/'>Superboop</NavLink>
        <img className="logo" src="/images/dog-nose.jpeg" alt="logo"/>
      </div>
      <div className='_right'>
        <a href="https://www.instagram.com/superboop.shop/">Instagram</a>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </div>
    </div>
  )
}

export default Nav

