import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Registration from "./Registration.js";
import logo from "./images/PhoenixLogo.png";
import HowToBar from "./images/howtobarphoenixlanding.png";
import LandPgCal from "./images/landingpagecalendarview.jpeg";
import LandPgPeople from "./images/landingpagepeoplemeeting.png"; 

const useStyles = makeStyles(theme => ({

  root: {
    flexGrow: 1,
  },

howtobar: {
width: 1100,
height: 178.27
},
landpgcal: {
  width: 550,
  height: 178.27,
  zindex: 0,
  },

  landpgpeople: {
    width: 550,
    height: 178.27,
    zindex: 100,
    },

// parent: {
// width: 50,
// height: 50,
// position: "absolute",
// zindex: -45
// },

// inner: {
//   position: "absolute",
//   zindex:1,
//   bottom:0,
//   right:25
// },

    grow: {
      flexGrow: 1,
    },
    
    menuButton: {
      marginRight: theme.spacing(2),
    },
    logo: {
  maxWidth: 100,
    },
    phoenix: {
        fontFamily: 'Kurale, serif',
        fontSize: 35,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    

    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      alignItems: 'center'
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }));
  
  export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const handleProfileMenuOpen = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };
  
    const handleMobileMenuOpen = event => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
  
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
    );
  
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >

        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            
          
          <AccountCircle/>
          </IconButton>
          <p>Registration</p>
        </MenuItem>
      </Menu>
    );
  
    return (
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar color="danger">
            <img src={logo} alt="logo" className={classes.logo} />
            <p className={classes.phoenix}> Phoenix</p>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
            <IconButton
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
                <Registration />
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        <div>
        {/* <img src={PicMeetup} alt="meetup picture" className={classes.picmeetup} /> */}
        </div>
        <div>
        {/* <img src={Carousel} alt="carousel" className={classes.carousel} /> */}
        </div>
        <div>
        <img src={HowToBar} alt="how to bar" className={classes.howtobar} />
      </div>
      <div>
      <div>
      <img src={LandPgCal} alt="how to bar" className={classes.landpgcal} />
      <img src={LandPgPeople} alt="how to bar" className={classes.landpgpeople} />
      </div>
      </div>
      </div>
      
    );

  }
















