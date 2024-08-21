import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login attempted with:", { email, password });
    // Here you would typically send a request to your server
  };

  return (
    <Row>
      <Col md={4} className="border p-4">
        <h3 className="text-center">Signup</h3>
        <Form>
          <Form.Group controlId="signupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="signupPassword">
            <Form.Label>Create Password</Form.Label>
            <Form.Control type="password" placeholder="Create password" />
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm password" />
          </Form.Group>

          <Button variant="primary" type="submit" block>
            Signup
          </Button>

          <div className="text-center mt-3">
            <p>
              Already have an account? <a href="#login">Login here</a>
            </p>
          </div>

          <hr />

          <Button variant="outline-primary" block>
            Signup with Facebook
          </Button>
          <Button variant="outline-danger" block>
            Signup with Google
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default Signup;
