import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
import './Navbar.css';

const Navbar = () => {
    const [color, setColor] = useState(false)
    const PF = "http://localhost:5000/images/";
    const { user, dispatch } = useContext(Context);
    const handleLogout = () => {
      dispatch({ type: "LOGOUT" });
    }

  const navColor = () => {
      if(window.scrollY >= 70){
            setColor(true);
      }else{
          setColor(false);
      }
  }

  window.addEventListener("scroll", navColor);
    
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-style fixed-top" id={ color ? "active" : ""}>
        <div className="container-fluid">
          <Link id={color ? "activeColor" : ""} to="/" className="navbar-brand logo">
            DailyBlog
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
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto d-flex justify-content-center align-items-center">
              <Link id={color ? "activeColor" : ""} to="/" className="nav-link active ul-item" aria-current="page"> HOME </Link>
              <Link id={color ? "activeColor" : ""} to="/about" className="nav-link active ul-item" aria-current="page"> ABOUT </Link>
              <Link id={color ? "activeColor" : ""} to="/contact" className="nav-link active ul-item" aria-current="page"> CONTACT </Link>
              <Link id={color ? "activeColor" : ""} to="/write" className="nav-link active ul-item" aria-current="page"> 
              {
                  user ? "WRITE" : ""
              } </Link>
              <Link className="nav-link active ul-item" aria-current="page" onClick={handleLogout}>{user && "LOGOUT"}</Link>
              {
                    user ?
                        <>
                            <Link to="/settings" className="link">
                                <img
                                    className="topImg"
                                    src={PF+user.profilePic} 
                                    alt=""
                                />
                            </Link>
                            <i className="topSearchIcon fas fa-search"></i>
                        </>
                        :
                        <>
                            <Link  id={color ? "activeColor" : ""} to="/login" className="nav-link active ul-item" aria-current="page"> LOGIN </Link>
                            <Link  id={color ? "activeColor" : ""} to="/register" className="nav-link active ul-item" aria-current="page"> REGISTER </Link>

                        </>
                }
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
