import React, { useState, useEffect } from "react";
import { format, addHours } from "date-fns";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const DayPlanner = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState({ time: "", email: "", name: "bob" });
  const toggle = () => setDropdownOpen(prevState => !prevState);
  // useEffect(
  //   ()=>{
  //     axiosWAuth.post('https://mockenterview.herokuapp.com/api/account',).then(res=> console.log(res)).catch(err=>console.log(err))
  //   }

  // )
  const { buttonLabel, className } = props;

  const hours = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23
  ];

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("from the handle submit:", user.name);
    console.log("time:", user.time);
    console.log("email:", user.email);
  };
  // format(
  //   addHours(props.time, item),
  //   "MMMM d yyyy h bbbb "
  // )
  const appTime = num => format(addHours(props.time, num), "h bbbb ");
  // console.log("name:",user.name)
  return (
    <div>
      <Modal isOpen={props.modals} toggle={props.toggler} className={className}>
        <ModalHeader toggle={props.toggler}>{props.date}</ModalHeader>
        <ModalBody>
          <Form onSubmit={e => handleSubmit(e)}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
                onChange={e => handleChange(e)}
                value={user.email}
              />

              <Label for="Name">Name</Label>
              <Input
                type="name"
                name="name"
                id="exampleName"
                placeholder="Your Name"
                onChange={e => handleChange(e)}
                value={user.name}
              />
              <br />
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>Dropdown</DropdownToggle>
                <DropdownMenu>
                  {hours.map(item => {
                    let num = item;
                    return (
                      <DropdownItem
                        key={item}
                        value={user.time}
                        name="time"
                        onClick={() => {
                          setUser({
                            ...user,
                            time: format(
                              addHours(props.time, item),
                              "MMMM d yyyy h bbbb "
                            )
                          });
                        }}
                      >
                        {appTime(item)}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </Dropdown>
              <br />
              <Button color="primary">Submit</Button>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={props.toggler}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DayPlanner;
