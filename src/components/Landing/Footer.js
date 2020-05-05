import React from 'react';
import Terms from './Terms.js';
import './../../styles/Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import { makeStyles } from '@material-ui/core';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme)=> ({
    socialIcons: {
        color: theme.palette.secondary.contrastText
    },
    copyright: {
        backgroundColor: theme.palette.secondary.dark
    }
}))

const Footer = () => {
    const classes = useStyles();

    return (
        <footer>
        <section className="top-footer">
            <div className="info">
                <div>
                    
                    <ul>
                    Your Account
                        <li>Sign up</li>
                        <li>Log in</li>
                        <li>Help</li>
                    </ul>
                </div>
                <div>
                    <ul>
                    Discover
                        <li>Calendar</li>
                        <li>Topics</li>
                        <li>Cities</li>
                    </ul>
                </div>
                <div>
                    <ul>
                    Phoenix
                        <li>About</li>
                        <li>Phoenix Premium</li>
                        <li>Apps</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="follow">
                    <ul className={classes.socialIcons} >
                    <span style={{ color: "white" }}>Follow us</span>
                        <li><FacebookIcon /></li>
                        <li><TwitterIcon/></li>
                        <li><YouTubeIcon/></li>
                        <li><InstagramIcon/></li> 
                    </ul>
                    </div>
                </div>
        </section>
        <section className={classes.copyright}>
            <div className="copyright-text">
                <Button style={{ marginLeft: "16px" }}>
                    <Terms />
                </Button>
            <p>Made with ❤ © Lambda School 2020</p>
            </div>         
        </section>
        </footer>
    )
}

export default Footer;