// import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import "./AddProducts.css";

const Addpackages = () => {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    fetch("https://salty-stream-34659.herokuapp.com/addProducts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        reset();
        alert("Your order was successful");
        history.push("/dashboard/productlist");
      });

    console.log(data);
    // reset()
  };

  console.log(watch("example"));

  return (
    <div className="offset-1 col-md-8 col-sm-10 py-4">
      <h2 className="py-3">Add Products</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true })}
          className="form-control mb-3"
          placeholder="Enter your package Name"
        />

        <textarea
          {...register("descrip", { required: true })}
          className="form-control mb-3"
          placeholder="Package Name Description"
        />
        <input
          {...register("photoUrl", { required: true })}
          className="form-control mb-3"
          placeholder="Photo Url"
        />
        <input
          {...register("price", { required: true })}
          className="form-control mb-3"
          placeholder="price"
        />
        {errors.exampleRequired && (
          <span className="text-danger">This field is required</span>
        )}

        <input type="submit" className="btn btn-block w-100 btn-success" />
      </form>
    </div>
  );
};

export default Addpackages;
