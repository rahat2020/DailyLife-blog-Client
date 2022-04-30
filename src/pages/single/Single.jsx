import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import SinglePost from '../../components/SinglePost/SinglePost';
import './Single.css';


function Single() {
  return (
    <div className="single">
      <div className="row">
        <div className="col-md-9 mt-4">
          <SinglePost />
        </div>
        <div className="col-md-3 mt-4">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default Single