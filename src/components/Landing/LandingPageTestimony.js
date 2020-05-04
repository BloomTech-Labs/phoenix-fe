import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import { Typography } from "@material-ui/core";
import Woman from "../../images/wmn.jpg"
import Woman2 from "../../images/wmn2.jpg"
import Woman3 from "../../images/wmn3.jpg"
import LandingPageTestimonyStyles from "../../styles/LandingPageTestimonyStyles";


export default function LandingPageTestimony() {
  const useStyles = LandingPageTestimonyStyles;
const classes = useStyles();

  return (
    <main className={classes.root}>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Card>
          <CardMedia 
          className={classes.media}
          image={Woman}
          title="man"/>
          <Typography className={classes.testimony}>
          </Typography>
        </Card>
        
      </div>
      <div className={classes.quotes}>
        <div className={classes.qblock}>
          <img className={classes.media} src={Woman}/>
            <span>It's been just over a year for me and I joined Phoenix on a whim. I'm so glad I did! I've met a lot of great people so far and look forward to more meetups!</span>
        </div>
        <div className={classes.qblock}>
          <img className={classes.media} src={Woman3}/>
          <span>Phoenix has really livened up my weekends. I'm glad I get to meet people like me and there's always something going on in my town</span>
        </div>
        <div className={classes.qblock}>
          <img className={classes.media} src={Woman2}/>
          <span>The Website was so easy to use and I was able to find a sewing circle near me. I'm having so much fun I've forgotten all about my husband</span>
        </div>
      </div>
      
    </main>
  );
}
