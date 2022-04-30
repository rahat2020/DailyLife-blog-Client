import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
import { Context } from '../../Context/Context';
import axios from 'axios';
import Swal from 'sweetalert2';

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("https://cryptic-castle-66347.herokuapp.com/https://shrouded-ravine-20668.herokuapp.com/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      res.data && Swal.fire({
        icon: 'success',
        title: 'Welcome',
        text: 'You are logged in successfully',
      })
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      err && Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Enter valid information',
      })
      // alert("LOGIN FAILURE")

    }
  };
  console.log(user, isFetching)
  return (
    <div className="login mt-5">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
      </form>
      <Link className="link" to="/register">
        <button className="loginRegisterButton">Register</button>
      </Link>
    </div>
  )
}

export default Login