// import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from "react-bootstrap";
import "./About.css";

const About = () => {
  // const [teachers, setTeachers] = useState([])

  // useEffect(() => {
  //     fetch("./teacher.JSON")
  //         .then(res => res.json())
  //         .then(data => setTeachers(data))
  // }, [])
  return (
    <div className="about my-5">
      <Container>
        <div className="row">
          <div className="col-lg-6">
            <img
              src="https://www4.djicdn.com/cms_uploads/product/cover/174/daabfd97df0d69b3f558b6a490f1432b.png"
              alt=""
            />
          </div>
          <div className="col-lg-6 mt-5">
            <div classname="hello">
              <div>
                <h2>Matrice 200 Series V2</h2>
                <Card.Text className="text-muted">
                  The ultimate platform for aerial productivity combines a
                  rugged design and simple configurability to work as a solution
                  for a variety of industrial applications. Improvements to the
                  M200 Series V2 enhance intelligent control systems, flight
                  performance, and add flight safety and data security features.
                  for a variety of industrial applications. Improvements to the
                  M200 Series V2 enhance intelligent control systems, flight
                  performance, and add flight safety and data security features.
                  The ultimate platform for aerial productivity combines a
                  rugged design and simple configurability to work as a solution
                  for a variety of industrial applications. Improvements to the
                  M200 Series V2 enhance intelligent control systems, flight
                  performance,.
                </Card.Text>
                <Button variant="warning">Learn More</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="row py-5 text-center">
          <h2>Professional </h2>
          <p className=" px-5 text-muted">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart.
          </p>
        </div>
        <div className="row"></div>
      </Container>
    </div>
  );
};

export default About;
