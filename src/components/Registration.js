import React, { useState } from 'react';
import  Modal  from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

import axios from 'axios';


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
  const Registration = (props) => {
    const [ credentials, setCredentials ] = useState({
        user: {
        username: '',
        password: '',
        name:'',
        email:'',
        age: '',
        }
    })
    
    const history= useHistory();

    const handleChange = (event) => {
        setCredentials({
            ...credentials, [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios
            .post('https://phoenix-fe-staging.herokuapp.com/auth/register', credentials)

            .then(res => {
                console.log('registration res', res);
                axios
                    .post('/api/login', { username: credentials.username, password: credentials.password })
                    .then(res => {
                        console.log('login successful', res.data.message)
                        localStorage.setItem('token', res.data.token)
                        history.push('/')
                    }) 
                    .catch(err => {
                        console.log(err)
                        history.push('/')
                    })
            }).catch(err => {
                console.log('registration error', err);
                history.push('/')
            })
    }

    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };



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
                  
              </div>
            </div>
          </Modal>
        </div>
        </>
      );
      }
    

export default Registration;