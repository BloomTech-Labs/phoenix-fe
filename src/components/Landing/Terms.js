import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Checkbox from "@material-ui/core/Checkbox";
import { useForm, Controller } from "react-hook-form";
import Section1 from '../Terms/Section1.js';
import Section2 from '../Terms/Section2.js';
import Section3 from '../Terms/Section3.js';
import Section4 from '../Terms/Section4.js';
import Section5 from '../Terms/Section5.js';
import Section6 from '../Terms/Section6.js';
import Section7 from '../Terms/Section7.js';
import Section8 from '../Terms/Section8.js';

function rand() {
  return Math.round(Math.random() * 10);
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    overflow: "scroll",
    maxHeight: 600,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  button: {
    backgroundColor: '#f4f0f0'
  }
}));

function Terms(props) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const methods = useForm();
  const { handleSubmit, control, register } = methods;
  const onSubmit = data => console.log(data);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = event => {
    setChecked(event.target.checked);
  };

  return (
    <div className="fullTerms">
      <Button variant="outlined" style={{ color: '#f4f0f0', border: 'none' }} onClick={handleOpen}>
        Terms Of Service
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <Section1 />           
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />      
          <Section7 />
          <Section8 />

          <form onSubmit={handleSubmit(onSubmit)}>
            <label> By checking the box you are agreeing to the terms. </label>
            <Controller
              as={
                <Checkbox name="CheckBox" ref={register({ required: true })} />
              }
              name="MyCheckbox"
              value={checked}
              control={control}
              defaultValue={false}
            />

            <button onClick={handleChange}> I Agree! </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default Terms;
