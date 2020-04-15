import {  makeStyles } from '@material-ui/core/styles';

const LandPageCarouselStyles = makeStyles((theme) => ({
    root: {
        width: '40%',
        display: 'flex',
        flexDirection: 'row',
         margin: '3rem',
      
        },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },
    }));

export default LandPageCarouselStyles;