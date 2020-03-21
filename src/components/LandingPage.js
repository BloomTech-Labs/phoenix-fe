import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HowToBar from "../images/howtobarphoenixlanding.png";
import Peeps from '../images/Peeps.svg';
import Calendar from '../images/Calendar.png';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles(theme => ({

  root: {
    flexGrow: 1,
    margin: '2rem auto',
    [theme.breakpoints.down('xs')]: {
        flexDirection: 'column'
    }
  },

  howtobar: {
  margin: '1rem'
  },
  banner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 10rem 0 10rem',
    backgroundImage: `url(${Calendar})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      backgroundImage: 'none',
      margin: '0 auto',
    },   
  },
  bannerDivLeft: {
    width: '40%',
    fontSize: '1rem',
    fontWeight: '600',
    transform: 'translate(2rem, -5rem)',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      transform: 'none',
      backgroundImage: 'none'
  }
  }, 
  svg: {
    width: '60%',
    paddingTop: '10rem',
    [theme.breakpoints.down('sm')]: {

    }
  }

}));
  
  export default function PrimarySearchAppBar() {
    const classes = useStyles();
  
    return (
      <main className={classes.root}>
        <img src={HowToBar} alt="how to bar" className={classes.howtobar} />
      <div className={classes.banner}>
        <Typography className={classes.bannerDivLeft}>
        Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk godard pour-over blog tumblr humblebrag. Blue bottle put a bird on it twee prism biodiesel brooklyn. Blue bottle ennui tbh succulents.
        </Typography>
      <div className={classes.bannerDivRight}>
        <img src={Peeps} alt="inclusive svg people" className={classes.svg}/>
      </div>
      </div>
      </main>
    );

  }