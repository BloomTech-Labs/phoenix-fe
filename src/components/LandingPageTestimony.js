import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import LandingPageTestimonyStyles from "../styles/LandingPageTestimonyStyles";


export default function LandingPageTestimony() {
  const useStyles = LandingPageTestimonyStyles;
const classes = useStyles();

  return (
    <main className={classes.root}>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Typography className={classes.testimony}>
          CONNECT
          <br />
         Make real connections Meet people who love what you love, and stay in
          touch after the event. 
        </Typography>
      </div>
    </main>
  );
}
