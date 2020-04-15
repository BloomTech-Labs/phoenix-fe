import {  makeStyles } from '@material-ui/core/styles';

const MockEventsStyles = makeStyles((theme) => ({
    root: {
        width: '40%',
        display: 'flex', 
        flexDirection: 'row',
        // flexFlow: 'row nowrap',
        // alignItems: 'center',
        // justifyContent: 'space-evenly',
         margin: '5% 2% 5% 40%'
      
        },
        carousel: {
          width: '50%',
          display: 'flex',
          alignSelf: 'flex-start',
          margin: '5% 40% 5% 5%'
        },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },
    }));

export default MockEventsStyles;