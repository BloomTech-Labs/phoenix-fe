import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Woman from "../../images/wmn.jpg"
import Woman2 from "../../images/wmn2.jpg"
import Woman3 from "../../images/wmn3.jpg"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: "280px",
    margin: "3rem", 
    padding: "3rem"
  },
  media: {
    height: "300px",
  },
  testimonials: {
    display: "flex",
    alignItems: "self-end",
  }
});

export default function LandingPageTestimony() {

  const classes = useStyles();

  return (
    <div>
    <h1>What phoenixes are saying...</h1>
    <div className={classes.testimonials}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Woman}
          title="Contemplative Reptile"
        />
        <CardContent style={{ minHeight:"154px"}}>
          <Typography gutterBottom variant="h5" component="h2">
            Kristina, 54
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          It's been just over a year for me and I joined Phoenix on a whim. I'm so glad I did! I've met a lot of great people so far and look forward to more meetups!
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Woman2}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Sandra, 43
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The website was so easy to use. I quickly found interesting low pressure events. I was even able to find a sewing circle near me and pick up my old hobby.
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Woman3}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Taylor, 61
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Phoenix has really livened up my weekends. I'm glad I found Phoenix. Now I get to meet people like me. I never knew there was so much going on in my town.
          </Typography>
        </CardContent>
      </CardActionArea>    
    </Card>
    </div>
    </div>
  );
}
