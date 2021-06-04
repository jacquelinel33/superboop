require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

const Nav = () => {
  return (
    <div className='nav'>
      <div className='_left'>
        <h2>Superboop</h2>
        <img className="logo" src="/images/dog-nose.jpeg" alt="logo"/>
      </div>
      <div className='_right'>
        <div>login</div>
        <div>instagram</div>
        <div>Cart</div>
      </div>
    </div>
  )
}

export default Nav

