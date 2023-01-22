import { display } from "@mui/system";
import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/NavBar";
import Specials from "../Specials/Specials";
import { useCart } from "react-use-cart";
import OrderSummary from "./OrderSummary";

const OrderHistory = ({ item }) => {
  const [orders, setOrders] = useState([]);
  const [cart, setCart] = useState(null);

  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  console.log(item);

// fetch the orders from the backend
  useEffect(() => {
    fetch("http://127.0.0.1:3000/orders", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);


  return (
    <div
      className="orders  mb-10"
      style={{ backgroundColor: "#EDJEF2", height: "100% " }}
    >
      <div>
        <Navbar />
      </div>
      <div>
        <Specials />
      </div>
      <div
        className="orders row row-cols-3 mt-5  mb-10"
        style={{
          margin: "50px",
        }}
      >
        <div className="col-12  mb-10 ">
          <h5>
            Order History ({totalUniqueItems}) Total items: ({totalItems}){" "}
          </h5>

          <table className="table table-light table-bordered">
            <th>Order ID</th>
            <th>Item</th>
            <th className="text-center">Unit Price</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Total Price</th>
            <th className="text-center mb-2">Status</th>

            <tbody>
              {orders.map((order, index) => {
                return (
                  <tr key={index}>
                    <td className="text-center fw-bold">
                      {order.order_id}
                                          </td>
                    <td>{order.name}</td>
                    <td className="text-center">{order.price}</td>
                    <td style={{ width: "15%" }}>
                      <div className="input-group">

                        <div className="form-control text-center">
                          {order.quantity}
                        </div>

                      </div>
                    </td>

                    <td className="text-center">
                      {order.total_price}
                    </td>

                    <td className="text-center">
                      {" "}
                     <button className="btn btn-info">{order.status}</button>
                    </td>
                  </tr>
                );
              })}



            </tbody>

          </table>
        </div>


        <div className="col-auto">
          <button
            className="btn btn-primary  mb-10"
            style={{
              backgroundColor: "#990F02",
              borderRadius: "50px",
              border: "none",
            }}
            onClick={() => setCart(items)}
          >
            Order Again
          </button>
        </div>
      </div>

      {/* {cart && <OrderSummary cartItems={cart.items}  />} */}
    </div>
  );
};

export default OrderHistory;
