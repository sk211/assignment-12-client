import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
// import useAuth from "../../../hooks/useAuth";

const ManageAllOrder = () => {
  const [orders, setOrders] = useState([]);
  const [id, setId] = useState("");
  const [controlNew, setControlNew] = useState(false);
  // const { user } = useAuth();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetch(`https://salty-stream-34659.herokuapp.com/orders`)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 401) {
          history.push("/login");
        }
      })
      .then((data) => setOrders(data));
  }, [controlNew, history]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure , you want to delete it?");
    if (proceed) {
      fetch(`https://salty-stream-34659.herokuapp.com/orders/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            setControlNew(!controlNew);
            alert("Data deleted successSully");
          } else {
            setControlNew(false);
          }
        });
      console.log(id);
    }
  };

  const handleOrderId = (id) => {
    setId(id);
  };

  const onSubmit = (data) => {
    fetch(`https://salty-stream-34659.herokuapp.com/statusUpdate/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <div className="col-lg-11 col-md-11 col-sm-6">
      <h2>Manage Order: {orders.length} Orders</h2>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th> Name</th>
            <th>Photo</th>
            <th>Email</th>
            <th>status</th>
            <th>date</th>
            <th>price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr>
              <td>{order.name}</td>
              <td>
                <img
                  src={order.photoUrl}
                  width="50px"
                  height="50px"
                  alt="droan"
                />
              </td>
              <td>{order.email}</td>
              <td>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <select
                    onClick={() => handleOrderId(order._id)}
                    {...register("status")}
                  >
                    <option value={order.status}>Pandding</option>
                    <option value="shipped">shipped</option>
                  </select>
                  <input type="submit" />
                </form>
              </td>
              <td>{order.date}</td>
              <td>{order.price}</td>
              <button
                onClick={() => handleDelete(order._id)}
                className="btn bg-danger p-2"
              >
                Delete
              </button>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageAllOrder;
