import { display } from "@mui/system";
import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/NavBar";
import Specials from "../Specials/Specials";
import { useCart } from "react-use-cart";
import axios from "axios";
import { Link } from "react-router-dom";

const MyOrders = ({ item }) => {
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
  const [show, setShow] = useState(false);

  function handleCheckout(e) {}
  // e.preventDefault();
  //   axios
  //     .post("http://localhost:3000/customerorders", {

  //     })
  //     .then((response) => {})
  //     .catch((error) => {
  //       console.log(error);
  //     });

  // conditional sttatement to check if cart is empty? return an empty table
  if (isEmpty)
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
              Orders ({totalUniqueItems}) Total items: ({totalItems}){" "}
            </h5>

            <table className="table table-light table-bordered">
              <th>Image</th>
              <th>Item</th>
              <th className="text-center">Unit Price</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Total Price</th>
              <th className="text-center mb-2">Action</th>
              <tr>
                <th colSpan="6" className="text-center">
                  Your Cart is empty
                </th>
              </tr>
              <button className="btn btn-danger btn-sm">
                <Link
                  to="/homepage"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Continue Shopping
                </Link>
              </button>{" "}
            </table>
          </div>
        </div>
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
      {/* <div> <Specials /> </div> */}
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

          {show && (
            <div className=" table-responsive">
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
                          {
                            <img
                              src={item.image_url}
                              style={{ height: "3rem" }}
                            />
                          }
                        </td>
                        <td>{item.name}</td>
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

                        <td className="text-center">
                          {item.price * item.quantity}
                        </td>

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
                    <td colspan="1" className="text-center fw-bold">
                      <button
                        className="btn btn-danger  ms-3"
                        onClick={() => emptyCart()}
                      >
                        Clear cart
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {/* display checkout page when button is clicked */}
          {!show && (
            <div className="checkout-page">
              <div
                className="orders"
                style={{
                  margin: "10px",
                }}
              >
                <div className="col-12 ">
                  {/* <h5>
                    Orders ({totalUniqueItems}) Total items: ({totalItems}){" "}
                  </h5> */}

                  <div class="container-fluid bg-trasparent my-2">
                    {" "}
                    <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 mx-auto me-5 ms-4">
                      {" "}
                      <div class="col">
                        {" "}
                        <div
                          class="card h-80  pt-5"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                        >
                          {/* orders surmary card */}{" "}
                          <div
                            className="card pt-5"
                            style={{ backgroundColor: "#D9D9D9" }}
                          >
                            <div class="clearfix ">
                              {" "}
                              <h4 className="ms-3 text-center">
                                Order Summary
                              </h4>
                              <hr WIDTH="100%" COLOR="#990F02" SIZE="5" />
                            </div>
                            <div
                              className="card h-20 shadow-sm ms-3 me-3 mb-2 rounded"
                              style={{ backgroundColor: "#D9D9D9" }}
                            >
                              <h5 class="card-title">
                                <span class="float-start price-hp ms-3 mt-3">
                                  Orders ({totalUniqueItems}){" "}
                                </span>{" "}
                                <span class="float-end price-hp me-5 mt-3">
                                  Price &euro;
                                </span>
                              </h5>

                              <div class="col">
                                {" "}
                                <ol>
                                  {items.map((item) => (
                                    <li className="ms-3">
                                      {" "}
                                      <span class="float-start price-hp me-3">
                                        {item.name} {""}({item.quantity})
                                      </span>{" "}
                                      <span class="float-end price-hp me-5">
                                        $ {item.price * item.quantity}
                                      </span>
                                    </li>
                                  ))}
                                </ol>
                              </div>
                              <hr></hr>
                              <ul
                                className="subtotals-list ms-3 "
                                style={{
                                  textDecoration: "none",
                                  listStyleType: "circle",
                                }}
                              >
                                <li className="subtotals me-5 ">
                                  {" "}
                                  <span class="float-start price-hp fw-bold ">
                                    Sub Totals
                                  </span>{" "}
                                  <span class="float-end price-hp fw-bold">
                                    $ {cartTotal}
                                  </span>
                                </li>
                                <li>
                                  {" "}
                                  <span class="float-start price-hp me-5">
                                    Delivery
                                  </span>{" "}
                                  <span class="float-end price-hp me-5">
                                    Free{" "}
                                  </span>
                                </li>
                                <li>
                                  {" "}
                                  <span class="float-start price-hp fw-bold">
                                    Grand Total
                                  </span>{" "}
                                  <span class="float-end price-hp fw-bold me-5">
                                    ${cartTotal}
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>{" "}
                        </div>{" "}
                      </div>
                      {/* payment checkout card card */}{" "}
                      <div
                        class="card h-80 mt-5 shadow-sm"
                        style={{
                          backgroundColor: "#D9D9D9",
                        }}
                      >
                        {" "}
                        <div class="card-body">
                          {" "}
                          <div class="clearfix mb-3">
                            {" "}
                            <h4>Select Payment Method</h4>
                            <hr WIDTH="100%" COLOR="#990F02" SIZE="5" />
                          </div>
                          <div
                            className="card h-20 shadow-sm m-2"
                            style={{ backgroundColor: "#D9D9D9" }}
                          >
                            <div class="form-check m-2">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="checkoutForm3"
                                checked
                              />
                              <h5 class="mb-2">Credit card or Debit card</h5>
                              <div class="row mb-1">
                                <div class="col-9 mb-2">
                                  <div class="form-outline">
                                    <input
                                      type="text"
                                      id="formNameOnCard"
                                      class="form-control"
                                      placeholder="0000 1111 2222 3333"
                                    />
                                  </div>
                                </div>
                                <div class="col-5 mb-2"></div>
                              </div>
                              <div class="row mb-4">
                                <div class="col-5">
                                  <div class="form-outline">
                                    <input
                                      type="text"
                                      id="formNameOnCard"
                                      class="form-control"
                                      placeholder="01 / 12"
                                    />
                                  </div>
                                </div>
                                <div class="col-4 mb-2">
                                  <div class="form-outline">
                                    <input
                                      type="text"
                                      id="formCVV"
                                      class="form-control"
                                      placeholder="CVV"
                                    />
                                  </div>
                                </div>
                                <div class="col-8">
                                  <input
                                    type="text"
                                    id="formCardNumber"
                                    class="form-control"
                                    placeholder="Billing address"
                                  />
                                </div>
                              </div>
                            </div>

                            <div class="form-check ms-3">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="checkoutForm3"
                                checked
                              />
                              <h5 class="mb-2">Mobile Payment</h5>
                              <div class="form-outline me-5">
                                <input
                                  type="number"
                                  id="formCardNumber"
                                  class="form-control mb-4"
                                  placeholder="Mobile number"
                                  checked
                                />
                              </div>
                            </div>
                          </div>
                          {/* <button onClick={pay}>hallel</button> */}
                          <button
                            className="btn btn-primary  mb-10"
                            style={{
                              backgroundColor: "#990F02",
                              borderRadius: "50px",
                              border: "none",
                            }}
                            onClick={() => handleCheckout(items)}
                          >
                            {/* {show === true ? "Proceed to checkout" : "Back to cart"} */}
                            Make Payment
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="col ms-auto">
          <button
            className="btn btn-primary  mb-10"
            style={{
              backgroundColor: "#990F02",
              borderRadius: "50px",
              border: "none",
            }}
            onClick={() => setShow(!show)}
          >
            {show === true ? "Proceed to checkout" : "Back to cart"}
            {/* Proceed to place order */}
          </button>
        </div>
      </div>

      {/* {cart && <OrderSummary cartItems={cart.items}  />} */}
    </div>
  );
};

export default MyOrders;
