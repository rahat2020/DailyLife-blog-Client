import Post from "../Post/Post";
import "./Posts.css";

export default function Posts({ posts }) {
  return (
    <div className="row">
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