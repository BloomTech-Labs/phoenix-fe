import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { axiosWithAuth } from '../../utils/axiosWithAuth.js';
import { ModalStyle, getModalStyle } from '../../styles/ModalFormStyles.js';

const useStyles = ModalStyle;

const Registration = props => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    name: '',
    email: '',
    age: ''
  });

  const handleChange = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    handleClose();
    axiosWithAuth()
      .post('/auth/register', credentials)
      .then(res => {
        console.log(res);
        props.history.push('/dashboard');
      })
      .catch(err => console.log('ERROR MESSAGE', err.response));
  };

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
      <Button variant="outlined" onClick={handleOpen}>
        {props.title}
      </Button>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Register</h2>
          <p id="simple-modal-description">
            Birds of a feather... Join to find Phoenix meets near you
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
                variant="outlined"
              />
              <TextField
                required
                id="filled-required2"
                name="password"
                label="Password"
                type="password"
                minLength="8"
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
                placeholder="Letters are nice"
                variant="outlined"
              />
              <TextField
                required
                id="filled-required4"
                name="email"
                label="Email"
                type="email"
                value={props.email}
                onChange={handleChange}
                placeholder="@ required"
                variant="outlined"
              />
              <TextField
                required
                id="filled-required5"
                name="age"
                type="number"
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
    </>
  );
};

export default withRouter(Registration);
