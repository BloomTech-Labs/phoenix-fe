import { makeStyles } from "@material-ui/core/styles";

const LandPageCarouselStyles = makeStyles((theme) => ({
  root: {
    width: "40%",
    display: "flex",
    flexDirection: "row"
  },
  carousel: {
    width: "75%",
    display: "flex",
    alignSelf: "flex-start",
    margin: "2rem",
  },
  buttonCarousel: {
    display: "flex",
    alignItems: "center",
    margin: "1rem",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default LandPageCarouselStyles;
