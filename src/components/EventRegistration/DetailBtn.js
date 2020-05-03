import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const DetailBtn = (props) => {
  const eventID = props.event.event_id;

  let push = () => {
    props.history.push(`/event/${eventID}`);
    window.location.reload();
  };

  return (
    <>
      <Button
        onClick={push}
        variant="outlined"
        style={{ marginBottom: '16px' }}
        color="red"
      >
        View details
      </Button>
    </>
  );
};

export default withRouter(DetailBtn);
