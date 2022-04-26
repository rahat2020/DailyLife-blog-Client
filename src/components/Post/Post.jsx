import { Link } from "react-router-dom";
import "./Post.css";

export default function Post({ img, post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <Link to={`/post/${post._id}`} style={{textDecoration: 'none', color:"gray"}}>
      <div className="card card-wdth" style={{ borderRadius: "10px" }}>
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
              <span className="postCat" key={c._id}>{c.name}</span>
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
