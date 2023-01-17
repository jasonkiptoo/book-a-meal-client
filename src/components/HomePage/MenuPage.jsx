import { display } from "@mui/system";
import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/NavBar";
import Specials from "../Specials/Specials";
import MenuCard from "./MenuCard";

const MyOrders = () => {
  const [menu, setMenu] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/categories", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  console.log(menu);

  return (
    <div
      className="orders"
      style={{ backgroundColor: "#EDJEF2", height: "100vh" }}
    >
      <div>
        <Navbar />
      </div>
      {/* <div style={{ backgroundColor: "green", height: "35%", margin: "50px" }}> */}
      <Specials />
      {/* </div> */}

        <div className="orders row row-cols-3 mt-5">
          {menu.map((item, index) => {
            return <MenuCard key={index} item={item} />;
          })}
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
    
  );
};

export default MyOrders;
