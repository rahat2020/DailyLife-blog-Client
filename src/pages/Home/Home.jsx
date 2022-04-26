import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import OtherBlogs from '../../components/OtherBlogs/OtherBlogs';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Home.css';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  // console.log(location); 
  useEffect(() => {
    const url = 'http://localhost:5000/api/posts'
    fetch(url + search)
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [search])
  return (
    <>
      <Header />
      <div className="home">
        <div className="row">
          <div className="col-md-9">
            <Posts posts={posts} />
          </div>
          <div className="col-md-3">
            <Sidebar />
          </div>
        </div>
      </div>
      <OtherBlogs />
    </>
  )
}