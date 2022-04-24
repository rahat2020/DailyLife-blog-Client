import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';
import './Topbar.css';

export default function Topbar() {
    // const user = false;
    const PF = "http://localhost:5000/images/";
    const { user, dispatch } = useContext(Context);
    const handleLogout = () => {
      dispatch({ type: "LOGOUT" });
    }
    return (

        <div className="topbar">
            <div className="topLeft">
                <input className="search" type="text" placeholder="search" />
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/"> HOME</Link>
                    </li>
                    <li className="topListItem"><Link className="link" to="/about"> ABOUT</Link></li>
                    <li className="topListItem"><Link className="link" to="/contact"> CONTACT</Link></li>
                    <li className="topListItem"><Link className="link" to="/write">
                    {
                        user ? "WRITE" : ""
                    }</Link></li>
                    <li className="topListItem" onClick={handleLogout}>
                        {
                            user && "LOGOUT"
                        }
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ?
                        <>
                            <Link to="/settings" className="link">
                                <img
                                    className="topImg"
                                    src={PF+user.profilePic} 
                                    // src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt=""
                                />
                            </Link>
                            <i className="topSearchIcon fas fa-search"></i>
                        </>
                        :
                        <ul className="topList">
                            <li className="topListItem"><Link className="link" to="/login"> LOGIN</Link></li>
                            <li className="topListItem"><Link className="link" to="/register"> REGISTER</Link></li>

                        </ul>
                }
            </div>
        </div>
    )
}
