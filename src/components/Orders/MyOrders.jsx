import { display } from "@mui/system";
import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/NavBar";
import Specials from "../Specials/Specials";
import { useCart } from "react-use-cart";

const MyOrders = ({ item}) => {
  // const [menu, setMenu] = useState([]);
  // const [selectedProduct, setSelectedProduct] = useState(null);

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

  if(isEmpty)
  return(
    <div
      className="orders  mb-10"
      style={{ backgroundColor: "#EDJEF2", height: "100% " }}
    >
      <div>
        <Navbar />
      </div>
      <div >
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
            Orders ({totalUniqueItems}) Total items: ({totalItems}){" "}
          </h5>

          <table className="table table-light table-bordered">
            <th>Image</th>
            <th>Item</th>
            <th className="text-center">Unit Price</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Total Price</th>
            <th className="text-center mb-2">Action</th>
            <tr><th colSpan="6" className="text-center">Your Cart is empty</th></tr>

            </table>
            </div>
            </div>
            </div>

  )

  return (
    <div
      className="orders  mb-10"
      style={{ backgroundColor: "#EDJEF2", height: "100% " }}
    >
      <div>
        <Navbar />
      </div>
      <div >
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
            Orders ({totalUniqueItems}) Total items: ({totalItems}){" "}
          </h5>

          <table className="table table-light table-bordered">
            <th>Image</th>
            <th>Item</th>
            <th className="text-center">Unit Price</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Total Price</th>
            <th className="text-center mb-2">Action</th>
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      {<img src={item.image_url} style={{ height: "3rem" }} />}
                    </td>
                    <td >{item.name}</td>
                    <td className="text-center">{item.price}</td>
                    <td style={{ width: "10%" }}>
                      <div className="input-group">
                        <button
                          type="button"
                          className="input-group-text"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <div className="form-control text-center">
                          {item.quantity}
                        </div>
                        <button
                          type="button"
                          className="input-group-text"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>


                    <td className="text-center">{(item.price)*(item.quantity)}</td>

                    <td>
                      {" "}
                      <button
                        className="btn btn-warning "
                        onClick={() => removeItem(item.id)}
                      >
                        Remove item
                      </button>
                      </td>
                  </tr>
                );
              })}
              <tr>
                <td colspan="4" className="text-end fw-bold">
                 Grand Total
                </td>
                <td colspan="1" className="text-center fw-bold">
                  $ {cartTotal}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col ms-auto">
          <h5 className="text-end ms-5"> Total price: $ {cartTotal}</h5>
        </div>
        <div className="col-auto">
          <button className="btn btn-danger  ms-3" onClick={() => emptyCart()}>
            Clear cart
          </button>
        </div>

        <div className="col-auto">
          <button
            className="btn btn-primary  mb-10"
            style={{
              backgroundColor: "#990F02",
              borderRadius: "50px",
              border: "none",
            }}
            // onClick={() => setCart(items)}
          >
            Proceed to place order
          </button>
        </div>
      </div>

      {/* {cart && <OrderSummary cartItems={cart.items}  />} */}
    </div>
  );
};

export default MyOrders;
