import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { axiosWithAuth } from '../../utils/axiosWithAuth.js';
import { ModalStyle, getModalStyle } from '../../styles/ModalFormStyles.js';
import Modal from '@material-ui/core/Modal';

const useStyles = ModalStyle;

const EventRegistration = (props) => {
  const eventID = props.event.event_id;

  let usetToken;

  const token1 = localStorage.getItem('token');

  function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    usetToken = JSON.parse(jsonPayload);

    return usetToken;
  }

  parseJwt(token1);

  const userID = usetToken.id;

  let push = () => {
    window.location.reload();
    props.history.push(`/events`);
  };

  const onSubmit = async (event) => {
    axiosWithAuth()
      .post(`/api/calendar/user/${userID}/event/${eventID}`)
      .then((res) => {
        setTimeout(push, 5000);
      })
      .catch((err) => console.log(err, 'there was an error here'));
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
        onClick={() => {
          onSubmit();
          setTimeout(handleOpen, 1500);
        }}
        variant="outlined"
        style={{ marginBottom: '16px' }}
        color="red"
      >
        Join!
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2>You've registered for this event!</h2>
        </div>
      </Modal>
    </>
  );
};

export default withRouter(EventRegistration);
