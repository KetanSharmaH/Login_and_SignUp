import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword({
      password: event.target.value,
    });
  };
  const handleConfirmPassword = (event) => {
    if (event.handleConfirmPassword !== event.handlePasswordChange) {
      console.log("Password mismatch");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login attempted with:", { email, password });
    // Here you would typically send a request to your server
  };

  return (
    <section id="SignUp">
      <Container>
        <Row className="justify-content-center">
          <Col
            md={4}
            className="login-form bg-white p-4 rounded  border border-dark"
            style={{ marginTop: "7%" }}
          >
            <h3 className="text-center">Sign Up</h3>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleConfirmPassword}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Form.Group>

              <Form.Text className="text-right d-block mb-3">
                <a></a>
              </Form.Text>
              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  type="submit"
                  size=""
                  onClick={handleSubmit}
                  block
                >
                  Sign Up
                </Button>
              </div>

              <div className="text-center mt-3">
                <p>
                  Do not have an account? <a href="#signup">Signup here</a>
                </p>
              </div>

              <hr />
              <div className="d-grid gap-2">
                <Button
                  variant="outline-primary"
                  className="mb-2"
                  size=""
                  block
                >
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
    </section>
  );
}

export default Signup;
