import React from 'react'
import './FetauredBlog.css';
import imageOne from '../../img/imageOne.jpg';
import imageTwo from '../../img/imageTwo.jpeg';
import imageTheree from '../../img/imageThree.jpeg';
import imageFour from '../../img/imageFour.jpeg';
import meditations from '../../img/meditations.jpeg';

const FetauredBlog = () => {
    return (
        <section className="featured-container">
            <div className="heading">
                <h5 className="cat-head-title">Featured Blog</h5>
            </div>
            <div data-aos="fade-up" className="row">
                <div className="col-md-6">
                    <div className="col-lft-conatiner">
                        <img src={imageOne} alt="" className="featImg" />
                        <div className="featImgText">
                            <div className="category">
                                <span className="categoryTittle">Featured</span>
                                <span className="ms-2 categoryTittle">Travel</span>
                                <h3 className="fetureTitle">How to Spend the Perfect Day on Croatia’s Most Magical Island</h3>
                                <div className="featBottom">
                                    <span className="featAuthor">By alex de costa</span>
                                    <span className="featDate">July 29th 2022</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="col-md-6 col-rgt">
                    <div className="col-rgt-container">
                        <div className="row">
                            <div className="col-md-6 margin-btm">
                                <div className="col-rgt-img-container">
                                    <img src={imageTwo} alt="" className="col-rgt-img" />
                                    <div className="col-rgt-text">
                                        <h3 className="col-rgt-title">
                                            As Office Tenants Expect More Tech, Even the Windows Get Smart Today
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* img-two */}
                            <div data-aos="fade-up" className="col-md-6 margin-btm">
                                <div className="col-rgt-img-container">
                                    <img src={meditations} alt="" className="col-rgt-img" />
                                    <div className="col-rgt-text">
                                        <h3 className="col-rgt-title">
                                            The importance of doing meditaions in our daily life in every conditions
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            {/* img-three */}
                            <div className="col-md-6">
                                <div className="col-rgt-img-container">
                                    <img src={imageTheree} alt="" className="col-rgt-img" />
                                    <div className="col-rgt-text">
                                        <h3 className="col-rgt-title">
                                            10 Best Workspace Gadgets To Totally Upgrade Your Desk Right Now
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            {/* img-four */}
                            <div data-aos="fade-up" className="col-md-6 mb">
                                <div className="col-rgt-img-container">
                                    <img src={imageFour} alt="" className="col-rgt-img" />
                                    <div className="col-rgt-text">
                                        <h3 className="col-rgt-title">
                                            5 Ways to Visit Antarctica, From Photography Journeys to Luxury Ships
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FetauredBlog