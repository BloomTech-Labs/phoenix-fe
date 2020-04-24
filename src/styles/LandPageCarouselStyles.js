import { makeStyles } from "@material-ui/core/styles";

const LandPageCarouselStyles = makeStyles(theme => ({
  root: {
    width: "40%",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.up('md')]: {},
  },
  carousel: {
    width: "55%",
    display: "flex",
    margin: "2rem",
    [theme.breakpoints.up('md')]: {},
  },
  buttonCarousel: {
    display: "flex",
    alignItems: "center",
    margin: "1rem",
    [theme.breakpoints.up('md')]: {},
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.fontWeightRegular,
  },
}));

export default LandPageCarouselStyles;
