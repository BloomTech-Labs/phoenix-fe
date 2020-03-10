import React, { useState } from 'react';
import  Modal  from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import axios from 'axios';
// import Avatar from '@material-ui/core/Avatar';

import { makeStyles } from '@material-ui/core/styles';



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
  }));

function Registration (props) {
  const [ user, setUser ] = useState({
    
        username: '',
        password: '',
        name:'',
        email:'',
        age: '',
  })


    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const handleSubmit = e => {
        e.preventDefault();

const header = new Headers();
header.append('Access-Control-Allow-Origin', '*');



axios.post("https://phoenix-fe-staging.herokuapp.com/", user, header)
.then(function(response) {
  console.log(response);
  localStorage.setItem("user", response);
  props.history.push("/");
})
.catch(function(error) {
  console.log(error);
});
  };
        
        
      const handleChange = (event) => {
        console.log(event.target)
        setUser({
            ...user, [event.target.name]: event.target.value
        });
      }
      return (
          <>
        <div>
        <Button variant="outlined" onClick={handleOpen}>Register</Button>
        
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
          >
              <div style={modalStyle} className={classes.paper}>
                <h2 id="simple-modal-title">New Phoenix </h2>
                <p id="simple-modal-description">
                Start Your Journey As A Phoenix 
                </p>
                <div>
                  <form className={classes.root} onSubmit={handleSubmit}>
              
              <TextField
                  required
                  id="filled-required"
                  name="username"
                  label="Username"
                  value={props.username} 
                  onChange={handleChange}
                  placeholder="Username"
                  variant="outlined" />
                
                   <TextField
                  required
                  id="filled-required"
                  name="password"
                  label="Password"
                  value={props.password} 
                  onChange={handleChange}
                  placeholder="Must be 8 characters"
                  variant="outlined"
                  />
                    <TextField
                  required
                  id="filled-required"
                  name="name"
                  label="Full Name"
                  value={props.name} 
                  onChange={handleChange}
                  placeholder='Letters are nice'
                  variant="outlined"
                  />
                    
                    <TextField
                  required
                  id="filled-required"
                  name="email"
                  label="Email"
                  value={props.email} 
                  onChange={handleChange}
                  placeholder="@ required"
                  variant="outlined"
                  /> 
                   
                   <TextField
                  required
                  id="filled-required"
                  name="age"
                  label="Age"
                  value={props.age} 
                  onChange={handleChange}
                  variant="outlined"
                  />
                  <button onSubmit={handleSubmit}>Register</button>
                  </form>
                  
              </div>
            </div>
          </Modal>
        </div>
        </>
      );
      }
    

export default Registration;