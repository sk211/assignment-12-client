import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://salty-stream-34659.herokuapp.com/addProducts")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <Container className="py-5">
      <h2 className="py-3">All Products here </h2>
      <Row xs={1} sm={1} md={3} className="g-4">
        {products
          .filter((item, index) => index < 6)
          .map((product) => (
            <Col>
              <Card>
                <Card.Img variant="top" src={product.photoUrl} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.descrip.slice(0, 100)}</Card.Text>
                  <Card.Text>
                    <h2>$ 230</h2>
                  </Card.Text>
                  <Link to={`/ordarplace/${product._id}`}>
                    <Button variant="warning">Bye Now</Button>{" "}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Product;
