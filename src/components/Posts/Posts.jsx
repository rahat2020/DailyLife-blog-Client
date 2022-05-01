import Post from "../Post/Post";
import "./Posts.css";

export default function Posts({ posts }) {
  return (
    <div className="row">
      <div className="heading">
        <h5 className="cat-head-title">Latest Blogs</h5>
      </div>
      {
        posts.map((p) => (
          <div className="col-md-4 post-column" >
            <Post post={p} key={p._id} />
          </div>
        ))
      }
    </div>
  );
}