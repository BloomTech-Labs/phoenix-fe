import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HowToBar from "../../images/howtobarphoenixlanding.png";
import LandingPagePeople from "../../images/LandingPagePeople.jpg";
import Calendar from "../../images/calTrans.png";
import CTAbutton from "./CTAbutton";
import LandPageCarousel from "../LandPageCarousel";
import MockEvents from "../MockEvents";
import LandingPageTestimony from "./LandingPageTestimony";
import Panels from '../Landing/Carosel/Panels'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "2rem auto",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  cta: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "50px 0 0 13.5rem",
    [theme.breakpoints.up('md')]: {},
  },
  firstthird: {
    maxWidth: "80%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    [theme.breakpoints.up('md')]: {},
  },
  howtobar: {
    margin: "5rem",
    width: "80%",
    [theme.breakpoints.up('md')]: {},
  },
  banner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 10rem 0 10rem",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      margin: "0 auto",
    },
  },
  bannerDivLeft: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "40%",
    fontSize: "1rem",
    fontWeight: "600",
    margin: "1rem 0 auto 5rem",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      transform: "none",
      backgroundImage: "none",
    },
  },

  bannerDivRight: {
    margin: "100px 0",
    alignItems: "center",
  },
  svg: {
    width: "20%",
    height: "150px",
    maxWidth: "25%",
    maxHeight: "10%",
    paddingTop: "3rem",
    // opacity: "0.5",
    [theme.breakpoints.down("sm")]: {},
  },
  caltrans: {
    maxWidth: "80%",
  }
  
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <img src={HowToBar} alt="how to bar" className={classes.howtobar} />
      <div className={classes.firstthird}>
        <Panels/>
      </div>
      <div className={classes.cta}>
        <CTAbutton />
      </div>
      <div>
      </div>
      <div className={classes.banner}>
        <div style={{ display: "flex", justifyContent: "flex-center" }}>
          <LandingPageTestimony />
          <div>
          <img
            src={LandingPagePeople}
            alt="inclusive svg people"
            className={classes.svg}
          />
          {/* <img
                src={Calendar}
                alt="inclusive svg people"
                className={classes.caltrans}
              /> */}
          </div>
        </div>
        <div className={classes.bannerDivRight}>
        </div>
      </div>
    </main>
  );
}
