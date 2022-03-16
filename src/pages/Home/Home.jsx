import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Home.css';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
  // console.log(location); 
  useEffect(() => {
    const url = 'http://localhost:5000/api/posts'
    fetch(url+search)
    .then(res => res.json())
    .then(data =>setPosts(data))
  }, [search])
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  )
}
