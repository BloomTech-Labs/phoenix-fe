import { makeStyles } from "@material-ui/core/styles";

const LandPageCarouselStyles = makeStyles((theme) => ({
  root: {
    width: "40%",
    display: "flex",
    flexDirection: "row",
  },
  carousel: {
    width: "55%",
    display: "flex",
    // alignSelf: "flex-start",
    margin: "2rem",
  },
  buttonCarousel: {
    display: "flex",
    alignItems: "center",
    margin: "1rem",
  },
}));

export default LandPageCarouselStyles;
