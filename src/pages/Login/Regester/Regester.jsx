import React from "react";
import { Alert, Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Regester = () => {
  // const [loginData, setLoginData] = useState({});
  let history = useHistory();
  const { registerUser, isLoading, user, authError } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    registerUser(data.email, data.password, history);
    console.log(data);
    history.push("/");
    reset();
  };

  return (
    <Container className="py-5">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <img src="https://www.gecoitaly.it/images/register-img.jpg" alt="" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h2>Regester</h2>

          {!isLoading && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                name="email"
                type="email"
                className="form-control input-field mb-3"
                placeholder="Enter your Email"
                {...register("email", { required: true })}
              />
              <input
                name="password"
                type="password"
                className="form-control input-field mb-3"
                placeholder="password"
                {...register("password", { required: true })}
              />

              {errors.exampleRequired && (
                <span className="text-danger">This field is required</span>
              )}
              <input
                type="submit"
                className="btn btn-block w-100 btn-success"
              />
            </form>
          )}
          {isLoading && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {user?.email && (
            <Alert severity="success">
              <Alert severity="success">
                {" "}
                Login
                <strong>User Successfully</strong>
              </Alert>
            </Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </div>
      </div>
    </Container>
  );
};

export default Regester;
