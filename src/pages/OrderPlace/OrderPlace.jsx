import React, { useEffect, useState } from "react";
import { Card, Container, ListGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const OrderPlace = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const { productId } = useParams();
  console.log(productId);

  // order form deteles

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.status = "pending";
    data.date = new Date().toLocaleDateString();
    fetch("https://salty-stream-34659.herokuapp.com/addOrders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        alert("Order Submit sucecssfully");
      });

    console.log(data);
  };

  useEffect(() => {
    fetch(
      `https://salty-stream-34659.herokuapp.com/singleProducts/${productId}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [productId]);

  return (
    <Container className="py-5">
      <h4 className="text-center py-4">Orander Detlies</h4>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6  py-3">
          <Card style={{ maxWidth: "28rem" }}>
            <Card.Img
              variant="top"
              src={products.photoUrl}
              style={{ height: "250px" }}
            />
            <Card.Body>
              <Card.Title> Name : {products.name}</Card.Title>
              <Card.Text>Description : {products.descrip}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <h4 className="py-3">$ {products?.price}</h4>
            </ListGroup>
          </Card>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 py-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
              className="form-control mb-3"
              placeholder="Enter your package Name"
              value={products?.name}
            />

            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              className="form-control mb-3"
              placeholder="Your Email"
              value={user?.email}
            />

            <input
              name="photoUrl"
              type="text"
              {...register("photoUrl", { required: true })}
              className="form-control mb-3"
              placeholder="Photo Url"
              value={products?.photoUrl}
            />
            <input
              name="price"
              type="text"
              {...register("price", { required: true })}
              className="form-control mb-3"
              value={products?.price}
            />
            <input
              type="text"
              name="address"
              {...register("address", { required: true })}
              className="form-control mb-3"
              placeholder="Address"
            />
            {errors.exampleRequired && (
              <span className="text-danger">This field is required</span>
            )}

            <input
              type="submit"
              className="btn btn-block w-100 btn-success"
              value="Order Now"
            />
          </form>
        </div>
      </div>
    </Container>
  );
};

export default OrderPlace;
