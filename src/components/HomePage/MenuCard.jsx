import React from "react";
import { useCart } from "react-use-cart";

const MenuCard = ({ item }) => {
    const {addItem} = useCart();
  return (
    <div>
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
        <button className="btn text-white " style={{ flex: "1" }}>
          2 Glasses
        </button>

        <button
          class="btn btn-light "
          id="subtract"
          style={{
            borderRadius: "40px",
            flex: "0.4",
            border: "none",
            color: "#990F02",
            fontSize: "30px",
          }} onClick={() => addItem(item)}
        >
          +
        </button>
      </div>{" "}
    </div>
  );
};
export default MenuCard;
