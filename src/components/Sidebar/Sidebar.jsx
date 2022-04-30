import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/categories`)
      .then(res => res.json())
      .then(data => setCat(data))
  }, [])
  return ( 
    <div data-aos="fade-up" className="sidebar mt-4 pt-5">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img
          src="https://images.pexels.com/photos/892612/pexels-photo-892612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {
            cat.map((cat, index) => (
              <Link to={`/?cat=${cat.name}`} className="link"> 
              <li className="sidebarListItem" key={index}>
                {cat.name}
              </li>
              </Link>
            ))
          }
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  )
}
