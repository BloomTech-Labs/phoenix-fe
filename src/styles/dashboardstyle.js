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
      maxHeight: "65%",
      width: "25%",
      alignItems: 'center',
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
    maxHeight: "45%",
    width: "25%",
    margin: "200px 0",
    [theme.breakpoints.down('sm')]: {
      width: "80%",
      margin: "0, auto"
    }
  }
}));

export default DashboardStyles;
