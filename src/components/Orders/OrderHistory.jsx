import { display } from "@mui/system";
import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/NavBar";
import Specials from "../Specials/Specials";
import { useCart } from "react-use-cart";
import OrderSummary from "./OrderSummary";

const OrderHistory = ({ item }) => {
  const [menu, setMenu] = useState([]);
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

  if (isEmpty)
    return (
      <div>
        <Navbar />
        <p className="text-center">You have no Items in cart</p>
      </div>
    );
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
            <th>Image</th>
            <th>Item</th>
            <th className="text-center">Unit Price</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Total Price</th>
            <th className="text-center mb-2">Action</th>

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

      {cart && <OrderSummary cartItems={cart.items}  />}
    </div>
  );
};

export default OrderHistory;
