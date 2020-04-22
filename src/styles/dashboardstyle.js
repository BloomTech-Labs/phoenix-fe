import { makeStyles } from '@material-ui/core/styles';

const DashboardStyles = makeStyles((theme) => ({
  dashboard: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down('sm')]: {
      flexDirection: "column"
    }
  },
  eventlist: {
      height: "100%",
      width: "25%",
      [theme.breakpoints.down('sm')]: {
        width: "80%",
        margin: "0, auto"
      }
  },
  dashcal: {
      width: "50%",
      height: "50%",
      [theme.breakpoints.down('sm')]: {
        display: "none"
      }
  },
  chat: {
    width: "25%",
    [theme.breakpoints.down('sm')]: {
      width: "80%",
      margin: "0, auto"
    }
  }
}));

export default DashboardStyles;
