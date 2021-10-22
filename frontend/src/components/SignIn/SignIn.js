import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { signin } from '../../actions/userActions';

export default function SignIn() {
  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    dispatch(signin(email,password));
  }


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            placeholder="email"
            required
            onChange={e => setEmail(e.target.value)}>
          </input>
        </div>
        <div>
          <label htmlFor="Password"></label>
          <input
            type="password"
            id="password"
            placeholder="password"
            required
            onChange={e => setPassword(e.target.value)}>
          </input>
        </div>
        <div>
          <label/>
          <button type="submit">Sign In</button>
        </div>
        <div>
          <label/>
          <div>
            New? <Link to="/register">Create account</Link>
          </div>
        </div>
      </form>
    </div>
  )
}
