import React from 'react';
import Terms from './Terms.js';
import '../../styles/Footer.css';
import Facebook from '../../images/facebook.png';
import Twitter from '../../images/twitter.png';
import YouTube from '../../images/youtube.png';
import Instagram from '../../images/instagram.png';

const Footer = () => {

    return (
        <footer>
        <section>
            <div className="info">
                <div>
                    Your Account
                    <ul>
                        <li>Sign up</li>
                        <li>Log in</li>
                        <li>Help</li>
                    </ul>
                </div>
                <div>
                    Discover
                    <ul>
                        <li>Calendar</li>
                        <li>Topics</li>
                        <li>Cities</li>
                    </ul>
                </div>
                <div>
                    Phoenix
                    <ul>
                        <li>About</li>
                        <li>Phoenix Premium</li>
                        <li>Apps</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="follow">
                    Follow us
                    <ul>
                        <li>
                    <img src= {Facebook}alt="facebook app badges" />
                    </li>
                        <li><img src= {Twitter}alt="twitter app badges" /></li>
                        <li><img src= {YouTube}alt="youtube app badges" /></li>
                        <li><img src= {Instagram}alt="instagram app badges" /></li> 
                    </ul>
                    </div>
                </div>
        </section>
        <section className="terms-section">
            <div>
            <Terms />
            </div>         
        </section>
        </footer>
    )
}

export default Footer;