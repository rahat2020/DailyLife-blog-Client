import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Register.css';
import axios from 'axios';
import Swal from 'sweetalert2';

function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.post("https://cryptic-castle-66347.herokuapp.com/https://shrouded-ravine-20668.herokuapp.com/api/auth/register", {
                username,
                email,
                password,
            });
            res.data &&  Swal.fire({
                icon: 'success',
                title: 'Successful',
                text: 'you are now registered',
              })
            res.data && window.location.replace("/login")

        } catch(err){
            err &&  Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: 'Enter valid information'
              })
        }
      
    }
    return (
        <div className="register mt-5">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    className="registerInput"
                    type="text"
                    placeholder="Enter your username..."
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Email</label>
                <input
                    className="registerInput"
                    type="text"
                    placeholder="Enter your email..."
                    onChange={e => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    className="registerInput"
                    type="password"
                    placeholder="Enter your password..."
                    onChange={(e)=>setPassword(e.target.value)} 
                />
                <button className="registerButton">Register</button>
            </form>
            <Link to="/login" className="link">
                <button className="registerLoginButton">Login</button>
            </Link>
        </div>
    )
}

export default Register