import React, { useEffect, useState } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import ProductList from "../../Products/ProductList/ProductList";
import AddReview from "../../Review/AddReview/AddReview";
import AddProducts from "../AddProduct/AddProducts";
import MankeAdmin from "../MakeAdimn/MankeAdmin";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import MyOrders from "../MyOrder/MyOrders";
import Payment from "../Payment/Payment";
import "./MyDashboard.css";
const MyDeshbord = () => {
  let { path, url } = useRouteMatch();
  const { user, logOut } = useAuth();
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    fetch(`https://salty-stream-34659.herokuapp.com/chackadmin/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setAdmin(true);
        } else {
          setAdmin(false);
        }
      });
  }, [user.email]);
  console.log(isAdmin);

  return (
    <div className="myDashboard">
      <div className="row">
        <div className="col-lg-2 col-md-2  vh-100  pt-4 " id="dashboaard">
          <h3 className="text-center">
            {" "}
            <i class="fas fa-home    "></i> Dashboard
          </h3>
          <ul>
            {isAdmin && (
              <div>
                <li>
                  <i class="fas fa-address-card    "></i>
                  <Link exact to={`${url}`}>
                    Add Product
                  </Link>
                </li>
                <li>
                  <i class="fas fa-edit    "></i>
                  <Link exact to={`${url}/productlist`}>
                    Manage Products
                  </Link>
                </li>
                <li>
                  <i class="fab fa-expeditedssl    "></i>
                  <Link to={`${url}/manageorder`}>Manage All orders</Link>
                </li>
                <li>
                  <i class="fas fa-users    "></i>
                  <Link to={`${url}/makeadmin`}>Make Admin</Link>
                </li>
              </div>
            )}
            <li>
              <i class="fas fa-shopping-bag    "></i>
              <Link to={`${url}/myorders`}>My Orders</Link>
            </li>
            <li>
              <i class="fas fa-money-bill    "></i>
              <Link to={`${url}/payment`}>Payment</Link>
            </li>
            <li>
              <i class="fas fa-street-view    "></i>
              <Link to={`${url}/review`}>Review</Link>
            </li>
            <li className="d-flex ">
              <i
                class="fas fa-sign-out-alt   "
                style={{
                  display: "dlex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "12px",
                }}
              ></i>

              {user?.email && (
                <li
                  onClick={logOut}
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  Logout
                </li>
              )}
            </li>
          </ul>
        </div>
        <div className="col-lg-10 mx-auto">
          <div className="text-center">
            <Switch>
              <Route exact path={path}>
                <AddProducts />
              </Route>
              <Route path={`${path}/myorders`}>
                <MyOrders />
              </Route>
              <Route path={`${path}/productlist`}>
                <ProductList />
              </Route>
              <Route path={`${path}/manageorder`}>
                <ManageAllOrder />
              </Route>
              <Route path={`${path}/review`}>
                <AddReview />
              </Route>
              <Route path={`${path}/payment`}>
                <Payment />
              </Route>
              <Route path={`${path}/makeadmin`}>
                <MankeAdmin />
              </Route>
            </Switch>
            {/* <AddProducts />
            <MyOrders />
            <ManageAllOrder /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDeshbord;
