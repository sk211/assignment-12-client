import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Container>
        <div className="row py-5">
          <div className="col-lg-6">
            <h2>Contact us</h2>
            <h4>
              <span>
                <i class="fas fa-map-marker-alt px-2 text-warning"></i>
              </span>
              Postal Address:
            </h4>
            <p>PO Box 97845 Baker st. 567, Los Angeles, California, US.</p>
            <h4>
              <span className="text-warning px-2">
                <i class="fas fa-envelope"></i>
              </span>
              Email:
            </h4>
            <p>peterparker@masterstudy.com</p>
            <h4>
              <span className=" text-warning">
                <i class="fas fa-globe px-2"></i>
              </span>
              Web:
            </h4>
            <p>stylemixthemes.com</p>
          </div>
          <div className="col-lg-6">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name </Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Subject </Form.Label>
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Comment</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I agree to theTerms & Conditions"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
        <div className="row py-5"></div>
      </Container>
    </div>
  );
};

export default Contact;
