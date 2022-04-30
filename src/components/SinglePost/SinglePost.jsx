import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Context } from '../../Context/Context';
import './SinglePost.css';
import Swal from 'sweetalert2';

function SinglePost() {
  const [post, setPosts] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMood, setUpdateMood] = useState(false);
  const location = useLocation()
  // console.log(location.pathname.split('/')[2]) // to see the path name
  const path = location.pathname.split('/')[2];
  const PF = "https://shrouded-ravine-20668.herokuapp.com/images/";
  const { user } = useContext(Context)

  ///GETTING POSTS DATA FROM SERVER
  useEffect(() => {
    const getPost = async () => {
      // const res = await axios.get("http://localhost:5000/api/posts/" + path);
      const res = await axios.get("https://shrouded-ravine-20668.herokuapp.com/api/posts/" + path);
      setPosts(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  // DELETE THE POST
  const handleDeletePost = async () => {
    try {
    const res = await axios.delete(`https://shrouded-ravine-20668.herokuapp.com/api/posts/${post._id}`, {
        data: { username: user.username },
      });
      res.data && Swal.fire({
        icon: 'success',
        title: 'Post Deleted Successfully',
        text: 'To see the changes reload the page',
      })
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  }

  //UPDATE POST
  const handleUpdate = async () => {
    try {
      const res = await axios.put(`https://shrouded-ravine-20668.herokuapp.com/api/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      res.data && Swal.fire({
        icon: 'success',
        title: 'Post Successfully edited',
        text: 'To see the changes reload the page',
      })
      setUpdateMood(false)
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div data-aos="fade-up" className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={PF + post.photo ? PF + post.photo : "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} /// if PUBLIC FOLDER + post.photo is found then show me PF+ posts.photo or not
          alt=""
        />
        {
          updateMood ? <input
            type="text"
            autoFocus value={title}
            className="singlePostTitleInput"
            onChange={(e) => setTitle(e.target.value)}
          />
            :
            <h1 className="singlePostTitle">
              {title},
              {post.username === user?.username &&        ///if the post is belongs to user then he'll see this button
                (
                  <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMood(true)}></i>
                    <i className="singlePostIcon far fa-trash-alt" onClick={handleDeletePost}></i>
                  </div>
                )}
            </h1>
        }
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to={`/?user=${post.username}`}>
                {post.username}
              </Link>
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {
          updateMood ? <textarea
            value={desc}
            className="singlePostDescInput"
            onChange={(e) => setDesc(e.target.value)}
          />
            :
            <p className="singlePostDesc">
              {desc}
            </p>
        }

        {updateMood && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  )
}

export default SinglePost