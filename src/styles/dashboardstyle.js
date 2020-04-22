import { makeStyles } from '@material-ui/core/styles';

const DashboardStyles = makeStyles((theme) => ({
  dashboard: {
    height: "100%",
    display: "flex",
    flexDirection: "row"
  },
  eventlist: {
      height: "100%",
      width: "50%"
  },
  dashcal: {
      width: "50%",
      height: "50%"
  }
}));

export default DashboardStyles;
