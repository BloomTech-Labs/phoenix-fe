import { makeStyles } from '@material-ui/core/styles';

export const ModalStyle = makeStyles(theme => ({
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
      },
}))

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

export function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}