import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();
  let history = useHistory();
  const onSubmit = (data) => {
    console.log(data);

    fetch("https://salty-stream-34659.herokuapp.com/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        reset();
        alert("Your order was successful");
        history.push("/dashboard");
      });

    console.log(data);
  };
  return (
    <div className="offset-1 col-md-8 col-sm-10 py-4">
      <h2 className="py-3">Add Admin</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", { required: true })}
          className="form-control mb-3"
          placeholder="Enter email"
        />

        {errors.exampleRequired && (
          <span className="text-danger">This field is required</span>
        )}

        <input
          type="submit"
          className="btn btn-block w-100 btn-success"
          value="Add Admin"
        />
      </form>
    </div>
  );
};

export default MakeAdmin;
