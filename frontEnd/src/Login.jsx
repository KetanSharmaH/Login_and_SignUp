import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login attempted with:", { email, password });
    // Here you would typically send a request to your server
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={4} className="login-form bg-white p-4 rounded">
          <h3 className="text-center">Login</h3>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Text className="text-right d-block mb-3">
              <a href="#forgot-password">Forgot password?</a>
            </Form.Text>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" size="" block>
                Login
              </Button>
            </div>

            <div className="text-center mt-3">
              <p>
                Don't have an account? <a href="#signup">Signup here</a>
              </p>
            </div>

            <hr />
            <div className="d-grid gap-2">
              <Button variant="outline-primary" className="mb-2" size="" block>
                Login with Facebook
              </Button>
            </div>
            <div className="d-grid gap-2">
              <Button variant="outline-danger" size="" block>
                Login with Google
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
