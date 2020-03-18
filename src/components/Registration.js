import React, { useState } from 'react';
<<<<<<< HEAD
import  Modal  from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';



=======
import { withRouter } from 'react-router-dom';
import  Modal  from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {axiosWithAuth} from '../utils/axiosWithAuth.js';
import { makeStyles } from '@material-ui/core/styles';

>>>>>>> 0b2637594c8bb4f41ea4f57df82491515d511140
function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles(theme => ({
<<<<<<< HEAD
    paper: {
=======
  
    paper: {
      
>>>>>>> 0b2637594c8bb4f41ea4f57df82491515d511140
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    root: {
      '& .MuiTextField-root': {
<<<<<<< HEAD
        margin: theme.spacing(1),
        width: 200,
      },
    }
  }));



function Registration () {
    
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
=======
        display:"flex", 
        margin: theme.spacing(1),
        width: 200,
        
      },
    }
  }));
  const Registration = (props) => {
    const [ credentials, setCredentials ] = useState({
       
        username: '',
        password: '',
        name:'',
        email:'',
        age: '',
        
    })

    const handleChange = (event) => {
        setCredentials({
            ...credentials, [event.target.name]: event.target.value
        });
    }

    const handleSubmit = async (event) => {
      event.preventDefault();
      handleClose()
      axiosWithAuth().post('/auth/register', credentials)
      .then(res => {
        console.log(res)
        props.history.push('/login')
      })
  }
    const classes = useStyles();
>>>>>>> 0b2637594c8bb4f41ea4f57df82491515d511140
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
<<<<<<< HEAD
      return (
          <>
        <div>
          <button type="button" onClick={handleOpen}>
            Register Now
          </button>
=======
      return ( 
          <>
        <div>
        <Button variant="outlined" onClick={handleOpen}>Register</Button>
        
>>>>>>> 0b2637594c8bb4f41ea4f57df82491515d511140
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
          >
<<<<<<< HEAD
            <div style={modalStyle} className={classes.paper}>
              <h2 id="simple-modal-title">New Phoenix </h2>
              <p id="simple-modal-description">
              Start Your Journey As A Phoenix 
              </p>
              <div>
                <form className={classes.root}>
              
              <TextField
                  required
                  id="filled-required"
                  label="Required"
                  defaultValue="Username "
                  variant="filled"
                  />
                   <TextField
                  required
                  id="filled-required"
                  label="Required"
                  defaultValue="Password "
                  variant="filled"
                  />
                    <TextField
                  required
                  id="filled-required"
                  label="Required"
                  defaultValue="Full Name"
                  variant="filled"
                  />
                    <TextField
                  required
                  id="filled-required"
                  label="Required"
                  defaultValue="Email"
                  variant="filled"
                  />
                   <TextField
                  required
                  id="filled-required"
                  label="Required"
                  defaultValue="Age"
                  variant="filled"
                  />
                  </form>
=======
              <div style={modalStyle} className={classes.paper}>
                <h2 id="simple-modal-title">New Phoenix </h2>
                <p id="simple-modal-description">
                Start Your Journey As A Phoenix 
                </p>
                <div>
                  <form className={classes.root} onSubmit={handleSubmit}>
              
              <TextField
                  required
                  id="filled-required1"
                  name="username"
                  label="Username"
                  value={props.username} 
                  onChange={handleChange}
                  placeholder="Username"
                  variant="outlined" />
                
                   <TextField
                  required
                  id="filled-required2"
                  name="password"
                  label="Password"
                  value={props.password} 
                  onChange={handleChange}
                  placeholder="Must be 8 characters"
                  variant="outlined"
                  />
                    <TextField
                  required
                  id="filled-required3"
                  name="name"
                  label="Full Name"
                  value={props.name} 
                  onChange={handleChange}
                  placeholder='Letters are nice'
                  variant="outlined"
                  />
                    
                    <TextField
                  required
                  id="filled-required4"
                  name="email"
                  label="Email"
                  value={props.email} 
                  onChange={handleChange}
                  placeholder="@ required"
                  variant="outlined"
                  /> 
                   
                   <TextField
                  required
                  id="filled-required5"
                  name="age"
                  label="Age"
                  value={props.age} 
                  onChange={handleChange}
                  variant="outlined"
                  />
                  <button onSubmit={handleSubmit}>Register</button>
                  </form>
                  
>>>>>>> 0b2637594c8bb4f41ea4f57df82491515d511140
              </div>
            </div>
          </Modal>
        </div>
        </>
      );
      }
<<<<<<< HEAD
    

export default Registration;



// users
// .string('username', 255)
// .notNullable()
// .unique()

// users
// .string('password', 255)
// .notNullable()

// users
// .string('name', 255)
// .notNullable()

// users
// .string('email', 180)
// .notNullable()

// users
// .integer('age')
=======

export default withRouter(Registration);
>>>>>>> 0b2637594c8bb4f41ea4f57df82491515d511140
