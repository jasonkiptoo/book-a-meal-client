import react from "react";


const OrdersCard = () => {


  return (
    <div
      className="orders"
      style={{ backgroundColor: "#EDJEF2", height: "100vh" }}
    >

      <div
        className="orders row row-cols-3 mt-5"
        style={{
          margin: "50px",
        }}
      >
        {menu &&
          menu.map((item) => (
            <div key={item.id} className="menu-item">
              <div
                className="card-item"
                style={{ backgroundColor: "transparent", border: "none" }}
              >
                <div
                  className="card"
                  style={{
                    backgroundColor: "#D9D9D9",
                    borderRadius: "30px",
                    padding: "10%",
                  }}
                >
                  <img
                    src={item.image_url}
                    alt="piktcha"
                    className="img-fluid me-5 mt-3 mb-3"
                    style={{
                      height: "250px",
                      width: "200px",
                      borderRadius: "30px",
                      margin: "auto",
                    }}
                  ></img>
                  <p
                    className="product-name"
                    style={{ color: "#990F02", paddingLeft: "15%" }}
                  >
                    {item.name}
                  </p>
                  <p
                    className="product-name"
                    style={{ color: "#990F02", paddingLeft: "15%" }}
                  >
                    Ksh {item.id}
                  </p>
                </div>
                <div
                  className="card mt-3 mb-3"
                  style={{
                    backgroundColor: "#990F02",
                    border: "none",
                    borderRadius: "40px",
                    margin: "20%",

                    flexDirection: "row",
                  }}
                >

                  <button className="btn text-white "style={{flex: "1"}}>2 Glasses</button>

                  <button
                    class="btn btn-light "
                    id="subtract"
                    style={{
                      borderRadius: "40px",
                      flex: "0.4",
                      border: "none",
                      color: "#990F02",
                      fontSize: "30px",
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
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
            }}>
            Proceed to place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrdersCard;
