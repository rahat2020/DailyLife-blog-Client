import React, { useContext, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import './Setting.css';
import { Context } from '../../Context/Context';
import axios from 'axios';
import Swal from 'sweetalert2';

function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "https://dailylife-blog.up.railway.app/images/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("https://dailylife-blog.up.railway.app/api/upload", data);
      } catch (err) { }
    }
    try {
      const res = await axios.put("https://dailylife-blog.up.railway.app/api/users/" + user._id, updatedUser);
      // setSuccess(true);
      res.data && Swal.fire({
        icon: 'success',
        title: 'Successful',
        text: "Your account has been updated",
      })
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };


  // DELTE USER
  const handleDelete = async () => {
    try {
      const res = await axios.delete(`https://dailylife-blog.up.railway.app/api/users/${user._id}`, {
        data: { userId: user._id }
      })
      console.log('user deleted', res)

      res.data && Swal.fire({
        icon: 'success',
        title: 'User Deleted Successfully',
        text: 'Thank you for being with us',
      })
      window.location.replace('/')
    } catch (err) { }
  }

  //REMOVE FROM LOCALSTORAGE
  const handleRemove = () => {
    dispatch({ type: "REMOVE" })
    window.location.replace("/")
  }
  return (
    <div className="settings mt-5">
      <div className="row">
        <div className="col-md-9">
          <div className="settingsWrapper">
            <div className="settingsTitle">
              <span className="settingsUpdateTitle">Update Your Account</span>
              {/* <span className="settingsUpdateTitle">{user._id}</span>
              <span className="settingsUpdateTitle">{user.username}</span> */}
              <span className="settingsDeleteTitle" onClick={handleDelete && handleRemove}>Delete Account</span>
            </div>
            <form className="settingsForm" onSubmit={handleSubmit}>
              <label>Profile Picture</label>
              <div className="settingsPP">
                <img
                  src={file ? URL.createObjectURL(file) : PF + user.profilePic}
                  alt=""
                />
                <label htmlFor="fileInput">
                  <i className="settingsPPIcon far fa-user-circle"></i>
                </label>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              <label>Username</label>
              <input
                type="text"
                placeholder={user.username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Email</label>
              <input
                type="email"
                placeholder={user.email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="settingsSubmit" type="submit">
                Update
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-3">
          <Sidebar />
        </div>
      </div>


    </div>
  )
}

export default Settings