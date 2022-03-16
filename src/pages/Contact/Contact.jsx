import React from 'react'
import './contact.css';
import {Link } from 'react-router-dom';

const Contact = () => {
    return (
        <section className="contact  mt-2 ">
            <div className="contact-header">
                <h3 id="co-title">Contact with Us</h3>
                <h1 id="co-text">Reach out for any queries you have</h1>
            </div>
            <div className="contact-content">
                <div className="contact-form">
                    <h3 id="form-title">Send me a message</h3>
                    <form action="dailyblog@gmail.com" method="post" encType="text/plain">
                        <fieldset>
                            <div className="form-field">
                                <input name="name" type="text" id="name" placeholder="Your Name" />
                            </div>
                            <div className="form-field">
                                <input name="email" type="email" id="email" placeholder="Your Email" />
                            </div>
                            <div className="form-field">
                                <input name="Subject" type="text" id="subject" placeholder="Subject" />
                            </div>
                            <div className="form-field">
                                <textarea name="message" type="text" id="message" placeholder="Your Message" defaultValue={""} />
                            </div>
                        </fieldset>
                        <input id="form-btn" type="submit" defaultValue="send" />
                    </form>
                </div>
                <div className="contact-info">
                    <h3>Email Us At </h3>
                    <a href="mailto:npeel3497@gmail.com"><p>DailyBlog@gmail.com</p></a>
                    <h3>Find Us On </h3>
                    <div className="contact-links">
                        <Link to="/https://www.facebook.com"><i className="fab fa-facebook"/></Link>
                        <Link to="https://www.instagram.com"><i className="fab fa-instagram"/></Link>
                        <Link to="https://www.twitter.com"><i className="fab fa-twitter"/></Link>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Contact