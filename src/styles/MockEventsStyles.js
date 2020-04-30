import { makeStyles } from "@material-ui/core/styles";

const MockEventsStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "5rem 0 0 0",
    width: "50%",
  },

  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },

  media: {
    height: 200,
    backgroundPosition: 'top'
  },
}));

export default MockEventsStyles;
