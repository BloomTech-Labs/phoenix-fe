import {  makeStyles } from '@material-ui/core/styles';

const MockEventsStyles = makeStyles((theme) => ({
    root: {
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
         margin: '5% 2% 5% 53% ',
      
        },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },
    }));

export default MockEventsStyles;