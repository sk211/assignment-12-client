import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const ProductList = () => {
  const [products, setProduct] = useState([]);
  const [control, setConrol] = useState(false);

  useEffect(() => {
    fetch("https://salty-stream-34659.herokuapp.com/addProducts")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [control]);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure , you want to delete it?");
    if (proceed) {
      fetch(`https://salty-stream-34659.herokuapp.com/addProducts/${id}`, {
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
    <div>
      <h2 className="text-center py-3">{}All Products</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th> Name</th>
            <th>Photo</th>
            <th>price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td>{product.name}</td>
              <td>
                <img
                  src={product.photoUrl}
                  width="50px"
                  height="50px"
                  alt="droan"
                />
              </td>
              <td>{product.descrip.slice(0, 50)}</td>
              <td>{product.price}</td>
              <td>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="btn bg-danger p-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
