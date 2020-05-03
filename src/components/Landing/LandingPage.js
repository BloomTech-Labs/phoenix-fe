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
  howtobar: {
    margin: "5rem",
    width: "80%",
    [theme.breakpoints.up("md")]: {},
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
  imageContainer: {
    display: "flex",
    alignItems: "center",
    width: "300px",
    height: "100px",
    justifyContent: "center",
  },
  carousel: {
    width: "100%",
    height: "300px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
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
