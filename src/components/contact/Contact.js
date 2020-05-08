import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import axios from 'axios';

import './contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
  }
  handleForm = (e) => {
    axios
      .post('https://formcarry.com/s/H_prtFGpR6r0', this.state, {
        headers: { Accept: 'application/json' },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    e.preventDefault();
  };
  handleFields = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <Container className='contact'>
        <h2>Contact Me:</h2>
        <Form onSubmit={this.handleForm}>
        <FormGroup>
          <Label for="examplePassword">Name</Label>
          <Input
            type="text"
            name="name"
            id="examplePassword"
            placeholder="Enter your Name"
            onChange={this.handleFields}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter your Email"
            onChange={this.handleFields}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input
            type="textarea"
            name="text"
            id="exampleText"
            onChange={this.handleFields}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      </Container>
      
    );
  }
}
export default Contact;
