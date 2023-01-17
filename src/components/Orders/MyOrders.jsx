import { display } from "@mui/system";
import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/NavBar";
import Specials from "../Specials/Specials";
import { useCart } from "react-use-cart";

const MyOrders = ({ item }) => {
  const [menu, setMenu] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  if (isEmpty) return <p>Your have no orders</p>;
  return (
    <div
      className="orders"
      style={{ backgroundColor: "#EDJEF2", height: "100vh" }}
    >
      <div>
        <Navbar />
      </div>
      {/* <div style={{ backgroundColor: "green", height: "35%", margin: "50px" }}>
        <Specials />
      </div> */}
      <div
        className="orders row row-cols-3 mt-5"
        style={{
          margin: "50px",
        }}
      >
        <div className="col-12">
          <h5>
            Orders ({totalUniqueItems}) Total items: ({totalItems}){" "}
          </h5>

          <table className="table table-light">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    {/* <td>{<img src={item.image_url}}</td> */}
                    <td>
                      {<img src={item.image_url} style={{ height: "3rem" }} />}
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>Quantity ({item.quantity})</td>
                    <td>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove item
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="col-auto ms-auto">
            <button className="btn btn-info ms-2" onClick={() => emptyCart()}>
              Clear cart
            </button>
            <h3>Total price: $ {cartTotal} </h3>
          </div>
        </div>
        <div
          className=" col-2 col-md-8 col-lg-12"
          style={{ paddingLeft: "40%" }}
        >
          <button
            className="btn btn-primary m-3"
            style={{
              backgroundColor: "#990F02",
              borderRadius: "50px",
              border: "none",
            }}
          >
            Proceed to place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
