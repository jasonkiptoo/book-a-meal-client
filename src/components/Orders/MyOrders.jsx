import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import { useAuthContext } from "../hooks/useAuthContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Navbar from "../NavBar/NavBar";

const MyOrders = () => {
  // show cart and checkout
  const [checkout, setcheckout] = useState(true);
  // state to get mobile numebr
  const [mobile_number, setMobile] = useState(null);
  const {
    totalItems,
    items,
    cartTotal,
    emptyCart,
    updateItemQuantity,
    removeItem,
  } = useCart();
  const [stkCheck, setStkCheck] = useState();
  // const { user } = useAuthContext();
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   , []);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((userr) => setUser(userr));
      }
    });
  }, []);
  const navigate = useNavigate();
  // console.log([user]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePayment = () => {
    // handleShow();
    // PostOrder()
    // console.log(items);

    // add
    // add mobile number to the items
    let newArr = items.map(function (item) {
      return { ...item, phoneNumber: mobile_number };
    });
    let newArrr = newArr.map((itemm) => itemm);
    // merging the two arrays the two arrays
    let array = [{ user_id: user.user.id }];
    let array1 = [{ items: newArrr }];
    let merged = Object.assign({}, ...array, ...array1);

    // console.log({ "itemskkk": items.quantity });
    // console.log({ user_id: user.user.id });
    // console.log({ phoneNumber: mobile_number });

    // console.log(array1)

    fetch("http://127.0.0.1:3000/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(merged),
    })
      .then((res) => res.json())
      .then((data) => console.log(merged));

    // const cred = {
    //   "phoneNumber": user.user.contact,
    //   "amount": cartTotal
    // };

    // fetch("https://6183-196-101-71-81.ngrok.io/stkpush", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(cred)
    // })
    // .then(res => res.json())
    // .then(data => setStkCheck(data))
  };

  // function PostOrder(merged){

  // }

  const handleClick = () => {
    // const queryParams = {
    //   "checkoutRequestID": `${stkCheck[1].CheckoutRequestID}`
    // }
    // fetch("https://6183-196-101-71-81.ngrok.io/stkquery", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json"},
    //   body: JSON.stringify(queryParams)
    // })
    // .then(res => res.json())
    // .then(queryMessage => console.log(queryMessage))
    // .then(handleClose())
    // .then(() => {
    //   emptyCart();
    //   navigate("/")
    // .then(() => {
    //   if(query[1].ResultCode === "0") {
    //     alert("Payment received, order processing")
    //     emptyCart();
    //     navigate("/")
    //   } else {
    //     alert("Invalid response, please try again")
    //   }
    // })
  };

  // console.log(query[1].ResultCode)

  return (
    <div className="container w-75">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="bg-light">
          <Modal.Title>Payment Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light">
          A payment push has been sent to your device, click confirm once the
          payment is made.
        </Modal.Body>
        <Modal.Footer className="bg-light">
          <Button variant="primary" onClick={handleClick}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      <div>
        <Navbar />
      </div>
      {/* buttton to switch between checkout and cart */}
      <button
        className="btn btn-danger pt-5 mt-5"
        onClick={() => setcheckout(!checkout)}
      >
        {checkout === true ? "checkout" : "Back to cart"}
      </button>
      {/* {cart page display} */}
      {!checkout && (
        <div className="table-responsive">
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
                    <td>{item.name}</td>
                    <td className="text-center">{item.price}</td>
                    <td style={{ width: "15%" }}>
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

                    <td className="text-center">
                      {" "}
                      <button
                        className="btn btn-danger "
                        onClick={() => removeItem(item.id)}
                      >
                        X
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

      {/* checkout div */}
      {checkout && (
        <div>
          <div className=" pt-5 text-center mt-5">
            <h2>Checkout Form</h2>

            <p className="lead">Confirm cart details and make payment</p>
          </div>

          <div className="row">
            <div
              className="col-md-4 order-md-2 mb-4 p-3"
              style={{ backgroundColor: "#990F02" }}
            >
              <h4 className="d-flex justify-content-between align-items-center mb-3 text-white text-center">
                <span>My cart</span>
                <span className="badge badge-pill">{totalItems}</span>
              </h4>
              <ul className="list-group mb-3">
                {items.map((item) => {
                  return (
                    <li
                      className="list-group-item d-flex justify-content-between lh-condensed"
                      key={item.id}
                    >
                      <div>
                        <h6 className="my-0">
                          {item.name} ({item.quantity})
                        </h6>
                        <small className="text-muted">{item.description}</small>
                      </div>
                      <span className="text-muted">
                        {item.price * item.quantity}
                      </span>
                    </li>
                  );
                })}
                <hr />
                <li className="list-group-item d-flex justify-content-between text-success fs-3">
                  <span>Total (KES)</span>
                  <strong>{cartTotal}</strong>
                </li>
              </ul>
            </div>

            <div className="card col-md-8 order-md-1">
              <h4 className="mb-3">Shipping address</h4>

              {user ? (
                <div>
                  <div className="mb-3">
                    <label htmlFor="name">Full name</label>
                    <p className="fs-4">{user.user.username}</p>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="username">Username</label>
                    <p className="fs-4">{user.user.username}</p>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <p className="fs-4">{user.user.email}</p>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="address">Address</label>
                    <p className="fs-4">{user.user.email}</p>
                  </div>
                  <hr className="mb-4" />

                  <h4 className="mb-3">M-pesa Payment</h4>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="cc-name">Registered Name</label>
                      <p className="fs-4">{user.user.username}</p>
                      <small className="text-muted">{mobile_number}</small>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="cc-number">Phone Number</label>
                      <input
                        onChange={(e) => {
                          setMobile(e.target.value);
                        }}
                        type="number"
                        className="form-control"
                        id="cc-number"
                        placeholder=""
                        required
                        name="mobile_number"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <button
                        className="btn btn-warning btn-lg btn-block"
                        type="button"
                        onClick={() => navigate("/")}
                      >
                        Continue Shopping
                      </button>
                    </div>

                    <div className="col-md-6 mb-3">
                      <button
                        className="btn btn-warning btn-lg btn-block"
                        type="submit"
                        onClick={() => handlePayment()}
                      >
                        Make Payment
                      </button>
                    </div>
                  </div>
                  <hr className="mb-4" />
                </div>
              ) : (
                <form className="needs-validation">
                  <div className="mb-3">
                    <label htmlFor="name">Full name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="username">Username</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">@</span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Username"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="1234 Kwenu St"
                      required
                    />
                  </div>
                  <hr className="mb-4" />

                  <h4 className="mb-3">M-pesa Payment</h4>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="cc-name">Registered Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-name"
                        placeholder=""
                        required
                      />
                      <small className="text-muted"></small>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="cc-number">Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-number"
                        placeholder=""
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <button
                        className="btn btn-warning btn-lg btn-block"
                        type="button"
                        onClick={() => navigate("/")}
                      >
                        Continue Shopping
                      </button>
                    </div>
                    <div className="col-md-6 mb-3">
                      <button
                        className="btn btn-warning btn-lg btn-block"
                        type="button"
                        onClick={() => handlePayment()}
                      >
                        Make Payment
                      </button>
                    </div>
                  </div>
                  <hr className="mb-4" />
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
