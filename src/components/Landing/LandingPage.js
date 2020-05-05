import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CTApage from "./CTApage.js";
import { Slider } from "./Slider/Slider";
import coupleWine from "../../images/carousel1couplewine.jpg";
import marathon from "../../images/carousel2marathon.jpg";
import couplePark from "../../images/carousel3couplepark.jpg";
import travelCouple from "../../images/carousel4travelcouple.jpg";
import LPT from "./LandingPageTestimony.js"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  cta: {
    height: "100vh",
    backgroundColor: "#f4f4f4",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  firstthird: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    [theme.breakpoints.up("md")]: {},
    height:"100vh"
  },
  banner: {
    backgroundColor: "#f4f4f4",
    display: "flex",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      margin: "20px auto",
    },
  },

}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  const media = [
    {
      source: coupleWine,
    },
    {
      source: marathon,
    },
    {
      source: couplePark,
    },
    {
      source: travelCouple,
    },
  ];

  return (
    <main className={classes.root}>
      <div className={classes.firstthird}>
        <Slider media={media}></Slider>
      </div>
      <div className={classes.cta}>
        <CTApage />
      </div>
      <div className={classes.banner}>
        <LPT/>
      </div>
    </main>
  );
}
