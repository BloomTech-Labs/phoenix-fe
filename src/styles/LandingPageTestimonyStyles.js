import { makeStyles, responsiveFontSizes } from "@material-ui/core/styles";

const LandPageTestimonyStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "20% 0"
  },
  quotes:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height:"20%",
    padding: "0 0 70%",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      flexDirection: "column",
      margin: "0 auto",
    },
  },
  media: {
    height: "200px",
    borderRadius: '5%',
    width: "100%",
    padding: "3% 0"
  },
  qblock: {
    width: "30%",
    padding: "3%",
    height: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  flip: {
    fontSize: "small"
  }
}));

export default LandPageTestimonyStyles;
