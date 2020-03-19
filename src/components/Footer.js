import React from 'react';
import Terms from './Terms.js';
import '../styles/Footer.css';

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
                <div>
                    Follow us
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>YouTube</li>
                        <li>Instagram</li>
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