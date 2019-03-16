import React, { Component } from "react";
import { Card } from 'react-bootstrap';

class Contact extends Component {
  render() {
    return (
      <div>
          
      <div className="main-front" style={{backgroundColor: '#282c34'}}>
        <Card className="about-card" border="success" style={{backgroundColor:"rgba(255,255,255,0.85)"}}>
        <Card.Header>Quote</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
              erat a ante.{' '}
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </Card.Body>
        </Card>
      </div>
      </div>
    );
  }
}


export default Contact;