import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostData from '../../Data/Data';
import './OtherSInglePost.css';

const OtherBlogPost = () => {
    const [singlePost, setSinglePost] = useState([])
    // console.log(singlePost)
    const [isLike, setIsLikes] = useState(false);
    const [likes, setLikes] = useState(1)
    const { blogId } = useParams()
    console.log(blogId)

    useEffect(() => {
        setSinglePost(PostData)
    }, [])

    const postDetails = singlePost?.find(({ id }) => id === Number(blogId))
    // console.log(postDetails)

    const handleLiked = () => {
        setIsLikes(!isLike);
        let totalLikes = likes
        if (isLike) {
            setLikes(likes - 1);
            totalLikes = likes - 1;
        } else {
            setLikes(likes + 1);
            totalLikes = likes + 1;
        }
    }

    const handleShare = () => {
        
        alert('Share is under development')
    }

    return (
        <div>
            <div data-aos="fade-up" className="singlePost">
                <div className="singlePostWrapper">
                    <img
                        className="singlePostImg"
                        src={postDetails?.img}
                        alt=""
                    />
                    <h1 className="singlePostTitle">
                        {postDetails?.title}
                    </h1>

                    <div className="singlePostInfo">
                        <span>
                            Author:
                            <b className="singlePostAuthor">
                                {postDetails?.author}
                            </b>
                        </span>
                    </div>
                    <p className="singlePostDesc">
                        {postDetails?.dsc}
                    </p>
                </div>
                <div className="like d-flex justify-content-between align-items-center p-4">
                    <div className="">
                        <button className="like-colour" id={isLike ? "liked-btn" : ""} onClick={handleLiked}>
                            <i className=" fa-solid fa-heart"></i>
                        </button>
                        <span className="like-count">{likes}</span>
                    </div>
                        <i className="like-colour fa-solid fa-share" onClick={handleShare}></i>
                </div>
                <div className="p-3">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Your Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Write your comment</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} placeholder="your comment..." />
                    </div>
                    <div className="d-flex justify-content-end align-items-center">
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherBlogPost