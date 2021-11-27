import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
// import useFirebase from "../../hooks/userFirebase";

const Orders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [control, setConrol] = useState(false);

  useEffect(() => {
    fetch(`https://salty-stream-34659.herokuapp.com/myOrders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email, control]);

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
            setConrol(!control);
            alert("Data deleted successSully");
          } else {
            setConrol(false);
          }
        });
      console.log(id);
    }
  };

  return (
    <div className="col-lg-12 col-md-6 ">
      <h2>You have placed: {orders.length} Orders</h2>

      {orders.map((order) => (
        <Table className="table table-responsive-lg" key={order._id}>
          <thead>
            <tr>
              <th>Name</th>
              <th>photo url</th>
              <th>price</th>
              <th>Date</th>
              <th>state</th>
              <th>email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
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
              <td>{order.price}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>{order.email}</td>
              <td>
                <button
                  onClick={() => handleDelete(order._id)}
                  className="btn bg-danger p-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      ))}
    </div>
  );
};

export default Orders;
