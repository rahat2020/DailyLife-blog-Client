import { Link } from "react-router-dom";
import "./Post.css";

export default function Post({img, post}) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {
        post.photo ? 
        <img
          className="postImg"
          // src={post.photo}
          src={PF + post.photo} 
          alt=""
        /> : "image hasn't fetched yet"
      }
    <div className="postInfo">
      <div className="postCats">
      {post.categories.map((c) => (
            <span className="postCat" key={c._id}>{c.name}</span>
          ))}
      </div>
      <span className="postTitle">
        <Link to={`/post/${post._id}`} className="link">
          {post.title}
        </Link>
      </span>
      <hr />
      <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
    </div>
    <p className="postDesc">
      {post.desc ? post.desc : 'Lorem ipsum dolor sit amet consectetur'}
    </p>
  </div>
  );
}
