import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
import './Navbar.css';
import logo from '../../img/logo.png'

const Navbar = () => {
  const [color, setColor] = useState(false)
  const PF = "https://shrouded-ravine-20668.herokuapp.com/images/";
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  }

  const navColor = () => {
    if (window.scrollY >= 70) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener("scroll", navColor);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-style fixed-top" id={color ? "active" : ""}>
        <div className="container-fluid">
          <Link id={color ? "activeColor" : ""} to="/" className="navbar-brand logo">
            <img src={logo} alt="" className="logo-img"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
            <ul class="navbar-nav ms-auto d-flex justify-content-center align-items-center">
              <li class="nav-item">
                <Link id={color ? "activeColor" : ""} to="/" className="nav-link active ul-item" aria-current="page"> HOME </Link>
              </li>
              <li class="nav-item">
                <Link id={color ? "activeColor" : ""} to="/about" className="nav-link active ul-item" aria-current="page"> ABOUT </Link>
              </li>
              <li class="nav-item">
                <Link id={color ? "activeColor" : ""} to="/contact" className="nav-link active ul-item" aria-current="page"> CONTACT </Link>
              </li>
              <li class="nav-item">
                <Link id={color ? "activeColor" : ""} to="/write" className="nav-link active ul-item" aria-current="page">
                  {
                    user ? "WRITE" : ""
                  }
                </Link>
              </li>
              <li class="nav-item">
                <Link id={color ? "activeColor" : ""} className="nav-link active ul-item" aria-current="page" onClick={handleLogout}>{user && "LOGOUT"}</Link>
              </li>
              <li class="nav-item">

                {
                  user ?
                    <ul>
                      <Link to="/settings" className="link ul-item">
                        <img
                          className="topImg"
                          src={PF + user.profilePic}
                          alt=""
                        />
                      </Link>
                      {/* <i className="topSearchIcon fas fa-search"></i> */}
                    </ul>
                    :
                    <ul className="ms-2">
                      <li className="nav-item list-unstyled d-flex justify-content-center align-items-center">
                        <Link id={color ? "activeColor" : ""} to="/login" className="nav-link active ul-item" aria-current="page"> LOGIN </Link>
                        <Link id={color ? "activeColor" : ""} to="/register" className="nav-link active ul-item" aria-current="page"> REGISTER </Link>
                      </li>

                    </ul>
                }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
