import React, { useState } from 'react';
import { ModalStyle, getModalStyle } from '../../styles/ModalFormStyles.js';
import { withRouter } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { axiosWithAuth } from '../../utils/axiosWithAuth.js';

const useStyles = ModalStyle;

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
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
      .post('/auth/login', credentials)
      .then(res => {
        console.log('DATA: ', res.data);
        localStorage.setItem('token', res.data.token);
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
      <Button
        variant="outlined"
        style={{ marginLeft: '16px' }}
        onClick={handleOpen}
      >
        Login
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Log in</h2>
          <p id="simple-modal-description">Log in to see what's out there</p>
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
              <button onSubmit={handleSubmit}>Log in</button>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default withRouter(Login);
