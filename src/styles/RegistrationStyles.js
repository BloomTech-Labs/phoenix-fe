import { makeStyles } from '@material-ui/core/styles';

const RegistrationStyles = makeStyles(theme => ({
    paper: {
      
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
      root: {
        '& .MuiTextField-root': {
          display:"flex", 
          margin: theme.spacing(1),
          width: 200,          
        },
      }
}))

export default RegistrationStyles;