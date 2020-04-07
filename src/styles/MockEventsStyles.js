import {  makeStyles } from '@material-ui/core/styles';

const MockEventsStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },
    }));

export default MockEventsStyles;