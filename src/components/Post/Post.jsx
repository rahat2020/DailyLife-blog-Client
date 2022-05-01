import { Link } from "react-router-dom";
import "./Post.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Post({ img, post }) {
  useEffect(() => {
    AOS.init({ offset: 120, duration: 2000 });
  })
  const PF = "https://shrouded-ravine-20668.herokuapp.com/images/";


  return (
    <Link to={`/post/${post._id}`} style={{ textDecoration: 'none', color: "gray" }}>
      <div data-aos="fade-up" className="card card-wdth" style={{ borderRadius: "10px" }}>
        <div className="image">
          {
            post.photo ?
              <img
                className="postImg"
                // src={post.photo}
                src={PF + post.photo}
                alt=""
              /> : "image hasn't fetched yet"
          }
        </div>
        <div className="card-body">
          <div className="postCats">
            {post.categories.map((c) => (
              <span className="postCat" key={c}>{c.name}</span>
            ))}
          </div>
          <div className="card-title">
            <span className="postTitle">
              {post.title}
            </span>
            <p className="psotAuthor">Author: {post.username}</p>
            <hr />
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
          </div>

          <p className="card-text postDesc">
            {post.desc ? post.desc : 'Lorem ipsum dolor sit amet consectetur'}
          </p>
        </div>
      </div>

    </Link>
  );
}
