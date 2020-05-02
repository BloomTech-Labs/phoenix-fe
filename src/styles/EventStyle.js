import { makeStyles } from '@material-ui/core/styles';

const EventCardStyle = makeStyles(theme => ({
    root: {
      maxWidth: 345,
      marginBottom: '1rem'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      backgroundColor: theme.palette.secondary.main,
    },
    grid: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1rem'
    }
  }));

  export default EventCardStyle;