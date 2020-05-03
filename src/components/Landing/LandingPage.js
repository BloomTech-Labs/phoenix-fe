import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CTAbutton from "./CTAbutton";
import { Slider } from "./Slider/Slider";
import coupleWine from "../../images/carousel1couplewine.jpg";
import marathon from "../../images/carousel2marathon.jpg";
import couplePark from "../../images/carousel3couplepark.jpg";
import travelCouple from "../../images/carousel4travelcouple.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  cta: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "50px 0 0 13.5rem",
    [theme.breakpoints.up("md")]: {},
  },
  firstthird: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    [theme.breakpoints.up("md")]: {},
    height:"60%"
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
        <CTAbutton />
      </div>
      <div></div>
      <div className={classes.banner}>testimonials</div>
    </main>
  );
}
