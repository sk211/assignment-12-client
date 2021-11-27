import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";

const Review = () => {
  const [reviews, setReviws] = useState([]);
  useEffect(() => {
    fetch("https://salty-stream-34659.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviws(data));
  }, []);
  return (
    <div>
      <h2>
        <Container className="py-5">
          <Card>
            <Card.Header as="h6"> Customer Reviw</Card.Header>
            {reviews
              .filter((item, index) => index < 6)
              .map((review) => (
                <Card.Body>
                  <div className="d-flex ">
                    <div className="mr-3">
                      <i className="fas fa-user "></i>
                    </div>
                    <Card.Title
                      style={{
                        marginLeft: "20px",
                        fontSize: "15px",
                        marginTop: "10px",
                      }}
                    >
                      {" "}
                      {review.name}
                    </Card.Title>
                  </div>

                  <Card.Text
                    className="text-muted card-text"
                    style={{ fontSize: "13px", marginLeft: "50px" }}
                  >
                    {review.descrip}
                  </Card.Text>
                </Card.Body>
              ))}
          </Card>
        </Container>
      </h2>
    </div>
  );
};

export default Review;
