import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import './home.css';

export class Home extends Component {
  render() {
    return (
      <div>
        <Container className="aboutMe">
          <h2>About Me:</h2>
          <Row>
            <img src="https://via.placeholder.com/200" alt="Portfolio" />
            <Col>
              <p>
                My name is Ryan Magill. I am currently a student of the University of Texas' 
                Full Stack Web Development bootcamp, and looking foward to learning all that Full
                stack development has to offer.

                Im currently employed at Apple as a Technical expert.

                In my freetime I enjoy writing electronic music and hanging out outside.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
