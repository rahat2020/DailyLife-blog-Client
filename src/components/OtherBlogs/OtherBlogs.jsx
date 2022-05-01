import React, { useState, useEffect } from "react";
import "./OtherBlogs.css";
import PostData from "../../Data/Data";
import { Link } from 'react-router-dom';

const OtherBlogs = () => {
  const [post, setPost] = useState([]);
  // console.log(post, "here is the post form psotData");
  useEffect(() => {
    setPost(PostData);
  }, [post]);
  return (
    <div data-aos="fade-up" className="OtherBlogs" >
       <div className="heading">
        <h5 className="cat-head-title">Categories Blogs</h5>
      </div>
      <div className="row">
        {post.map((item) => (
          <div className="col-md-3 d-flex justify-content-center align-items-center" style={{ maxWidth: "400px" }}>
            <div className="box-container" >
              <div className="img-container">
                <img src={item.img} className="img" alt="" key={item}/>
              </div>

              <div className="overlay">
                <div className="title-containe">
                  <h4 className="otherTitle">{item.title}</h4>
                  <span className="otherAuthor"><i class="fa-solid fa-hand-point-right"></i>  {item.author}</span>
                </div>
                <p className="paragraph">{item.dsc}</p>
                <Link to={`/otherPost/${item.id}`}>
                  <button className="btn btn-warning">Read more</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherBlogs;
