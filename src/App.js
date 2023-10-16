import React from 'react';
import { Navbar, Container, Row, Col, Card } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>My first Application</Navbar.Brand>
      </Navbar>

      <Container>
        <h1>this is the content of th web site</h1>

        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>Content for Card 1.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>Content for Card 2.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>Content for Card 3.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
