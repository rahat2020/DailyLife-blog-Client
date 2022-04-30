import React from 'react'
import OtherBlogPost from '../../components/OtherBlogPost/OtherSInglePost'
import Sidebar from '../../components/Sidebar/Sidebar'

const OtherSinglePost = () => {
    return (
        <div className="otherPost container-fluid">
            <div className="row">
                <div className="col-md-9 mt-4 p-4">
                    <OtherBlogPost />
                </div>
                <div className="col-md-3 mt-4 p-4">
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default OtherSinglePost