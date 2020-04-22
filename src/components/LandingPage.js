import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HowToBar from "../images/howtobarphoenixlanding.png";
import Peeps from '../images/Peeps.svg';
import Calendar from '../images/Calendar.png';
import { Typography } from '@material-ui/core';
import MockEvents from './MockEvents';
import CTAbutton from './CTAbutton';



const useStyles = makeStyles(theme => ({

  root: {
    flexGrow: 1,
    margin: '2rem auto',
    [theme.breakpoints.down('xs')]: {
        flexDirection: 'column'
    }
  },

  howtobar: {
  margin: '1rem',
  width: '80%'
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
    width: '40%',
    fontSize: '1rem',
    fontWeight: '600',
    margin: '0 0 auto 5rem',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      transform: 'none',
      backgroundImage: 'none'
  }
  }, 
  
  verbage: {
    alignSelf: 'flex-start',
    textAlign: 'left'
  },

  bannerDivRight: {
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
        <CTAbutton/>
        <MockEvents />
        <img src={HowToBar} alt="how to bar" className={classes.howtobar} />
      <div className={classes.banner}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Typography className={classes.bannerDivLeft}>
          CONNECT<br/>
          Make real connections
          Meet people who love what you
          love, and stay in touch after the 
          event.
        </Typography>
        </div>
      <div className={classes.bannerDivRight}>
        <img src={Peeps} alt="inclusive svg people" className={classes.svg}/>
      </div>
      </div>
      </main>
      
    );

  }