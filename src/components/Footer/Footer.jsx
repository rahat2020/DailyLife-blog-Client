import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


function Footer() {
    return (
        <footer class="new_footer_area bg_color">
            <div class="new_footer_top">
                <div class="container">
                    <div class="row">
                        <div className="col-md-3">
                            <h5 className="titleOne">Get in touch</h5>
                            <p className="para">
                                Don’t miss any updates of our new templates and extensions</p>
                            <input className="subsInput" type="text" placeholder="Email" />
                            <button className="btn btn-primary mt-2">Subscribe</button>
                        </div>
                        <div className="col-md-3">
                            <h5 className="titleOne"> Download</h5>
                            <div className="colmn-2">
                                <p className="para">
                                    <ul className="toplist">
                                        <li className="listItem">Company</li>
                                        <li className="listItem">Andriod app</li>
                                        <li className="listItem">IOS app</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h5 className="titleOne">Help</h5>
                            <div className="para">
                                <ul className="toplist">
                                    <li className="listItem">Faq</li>
                                    <li className="listItem">terms</li>
                                    <li className="listItem">conditions</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h5 className="titleOne">Connect with us</h5>
                            <div className="social-media">
                                <i className="facebook icon fab fa-facebook-square"></i>
                                <i className="instagram icon fab fa-instagram-square"></i>
                                <i className="pinterest icon fab fa-pinterest-square"></i>
                                <i className="twitter icon fab fa-twitter-square"></i>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class="footer_bg">
                    <div class="footer_bg_one"></div>
                    <div class="footer_bg_two"></div>
                </div> */}
            </div>
            <div class="footer_bottom">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-sm-7">
                            <p class="mb-0 f_400">© Daily-Blogs Inc.. 2022 All rights reserved.</p>
                        </div>
                        <div class="col-lg-6 col-sm-5 text-right">
                            <p>Made with <i class="icon_heart"></i> in <Link to="/">DailyBlog</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer