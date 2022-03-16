import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

const About = () => {
    return (
        <div className="about mb-4 pb-4 mt-3">
            <div className="about-section">
                <div className="inner-container">
                    <h1>About Us</h1>
                    <p className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
                    </p>
                    <div to="/" className="skills">
                        <Link className="link">
                            <span>Daily Life</span>
                        </Link>
                        <Link to="/" className="link">
                            <span>Life style &amp; Quotes</span>
                        </Link>
                        <Link to="/"className="link">
                            <span>Technology</span>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About