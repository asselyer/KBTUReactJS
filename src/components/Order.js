import React, { Component } from "react";
import { Container, Row, Card, Form, Col, Button } from 'react-bootstrap';
import '../App.css';

class Order extends Component {
  render() {
    return (      
      <div className="banner">
        <br/>
      <Row className="left" >
      
      <Card className="text-center">
        <Card.Header>Заказ браслетов</Card.Header>
      <Form style={{padding: '10px'}}>
  <Form.Row >
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Заказать
  </Button>
</Form>
</Card>
</Row>
<Row className="right">
<Card style={{ width: '30rem', height: '493px', backgroundColor:'rgba(255,255,255,0.8)' }}>
  <Card.Body>
    <Card.Title>Браслеты QuickSafe</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Сделайте заказ прямо сейчас и получите браслеты уже завтра!</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Инструкция</Card.Link>
    <Card.Link href="#">Как сделать заказ</Card.Link>
  </Card.Body>
</Card>
</Row>
</div>
    );
  }
}


export default Order;