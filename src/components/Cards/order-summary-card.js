import React from "react";

const OrderSummaryCard = () => {
  return (
    <div>
      <div class="container-fluid bg-trasparent my-4 p-3">
        {" "}
        <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
          {" "}
          <div class="col">
            {" "}
            <div
              class="card h-80 shadow-sm"
              style={{
                backgroundColor: "#D9D9D9",
              }}
            >
              {" "}
              <div class="card-body">
                {" "}
                <div class="clearfix mb-3">
                  {" "}
                  <h4>Order Summary</h4>
                  <hr WIDTH="100%" COLOR="#990F02" SIZE="5" />
                </div>
                <div
                  className="card h-20 shadow-sm"
                  style={{ backgroundColor: "#D9D9D9" }}
                >
                  <h5 class="card-title">
                    <span class="float-start price-hp">Item (s)</span>{" "}
                    <span class="float-end price-hp">Price &euro;</span>
                  </h5>

                  <div class="col">
                    {" "}
                    <ol>
                      <li>
                        {" "}
                        <span class="float-start price-hp">Item 1</span>{" "}
                        <span class="float-end price-hp">12354.00 &euro;</span>
                      </li>
                      <li>
                        {" "}
                        <span class="float-start price-hp">Item 1</span>{" "}
                        <span class="float-end price-hp">54.00 &euro;</span>
                      </li>
                    </ol>
                  </div>

                  <ul>
                    <li>
                      {" "}
                      <span class="float-start price-hp">Sub Totals</span>{" "}
                      <span class="float-end price-hp">60000 &euro;</span>
                    </li>
                    <li>
                      {" "}
                      <span class="float-start price-hp">Delivery</span>{" "}
                      <span class="float-end price-hp">Free </span>
                    </li>
                    <li>
                      {" "}
                      <span class="float-start price-hp">Totals</span>{" "}
                      <span class="float-end price-hp">60000 &euro;</span>
                    </li>
                  </ul>
                  <p class="txt3">
                    Totals <span class="totals">$$$</span>
                  </p>
                </div>
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div class="col">
            {" "}
            <div
              class="card h-80 shadow-sm"
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
                  className="card h-20 shadow-sm"
                  style={{ backgroundColor: "#D9D9D9" }}
                >
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="checkoutForm3"
                      checked
                    />
                    <h5 class="mb-2">Credit card or Debit card</h5>
                    <div class="row mb-4">
                      <div class="col">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="formNameOnCard"
                            class="form-control"
                            placeholder="Card Number"
                          />
                          <label class="form-label" for="formNameOnCard">
                            Card Number
                          </label>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="formCardNumber"
                            class="form-control"
                          />
                          <label class="form-label" for="formCardNumber">
                            Credit card number
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="row mb-4">
                      <div class="col-3">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="formExpiration"
                            class="form-control"
                          />
                          <label class="form-label" for="formExpiration">
                            Expiration
                          </label>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="formCVV"
                            class="form-control"
                          />
                          <label class="form-label" for="formCVV">
                            CVV
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="checkoutForm4"
                    />
                    <h5 class="mb-2">Mobile Payment</h5>
                    <div class="form-outline">
                      <input
                        type="number"
                        id="formCardNumber"
                        class="form-control mb-4"
                        placeholder="Mobile number"
                      />
                    </div>
                  </div>

                  <button
                    class="btn btn-primary btn-lg btn-block mb-2 ml-auto" style={{backgroundColor: "#990F02"}}
                    type="submit"
                  >
                    Make Payment
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderSummaryCard;
