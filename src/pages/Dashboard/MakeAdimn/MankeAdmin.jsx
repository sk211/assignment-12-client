import React from "react";
import { useForm } from "react-hook-form";

const MankeAdmin = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    fetch("https://salty-stream-34659.herokuapp.com/makeAdmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        // useHistory.push("/order");
      });

    reset();
    alert("Add as Admin successful");
  };
  return (
    <div>
      <div className="offset-1 col-md-8 col-sm-10 py-4">
        <h2 className="py-3">Add Admin</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="email"
            type="email"
            {...register("email", { required: true })}
            className="form-control mb-3"
            placeholder="Enter Email"
          />
          <span className="text-left">Only user make a admin</span>

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
    </div>
  );
};

export default MankeAdmin;
