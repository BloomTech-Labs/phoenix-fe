import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HowToBar from "../images/howtobarphoenixlanding.png";
import LandingPagePeople from "../images/LandingPagePeople.jpg";
import Calendar from "../images/Calendar.png";
import CTAbutton from "./CTAbutton";
import LandPageCarousel from "../components/LandPageCarousel";
import MockEvents from "../components/MockEvents";
import LandingPageTestimony from "../components/LandingPageTestimony";

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
    margin: "0 0 0 13.5rem",
    [theme.breakpoints.up('md')]: {},
  },
  firstthird: {
    display: "flex",
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

  bannerDivRight: {},
  svg: {
    width: "45%",
    paddingTop: "3rem",
    [theme.breakpoints.down("sm")]: {},
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <div className={classes.firstthird}>
        <LandPageCarousel />
        <MockEvents />
      </div>
      <div className={classes.cta}>
        <CTAbutton />
      </div>
      <img src={HowToBar} alt="how to bar" className={classes.howtobar} />

      <div className={classes.banner}>
        <div style={{ display: "flex", justifyContent: "flex-center" }}>
          <LandingPageTestimony />
        </div>
        <div className={classes.bannerDivRight}>
          <img
            src={LandingPagePeople}
            alt="inclusive svg people"
            className={classes.svg}
          />
        </div>
      </div>
    </main>
  );
}
