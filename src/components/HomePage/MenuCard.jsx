import React from "react";
import { useCart } from "react-use-cart";
import { useState } from "react";
import RenderOrder from "./RenderOrder";
const MenuCard = ({ meals }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addItem } = useCart();
  return (
    <div style= {{backgroundColor: "#EDEEF2"}}>
      <div className="orders row row-cols-3 mt-5" style={{marginLeft: "53px"}} >
      {meals &&
          meals.map((item) => (
            <div key={item.id} className="menu-item" >
              <div
                className="card"
                style={{ backgroundColor: "transparent", border: "none" }}
              >
                <img
                  src={item.image_url}
                  alt="piktcha"
                  className="img-fluid"
                  style={{
                    height: "250px",
                    width: "200px",
                    borderRadius: "30px",
                    margin: "25px",
                  }}
                ></img>
                <button 
                  style={{
                    backgroundColor: "#990F02",
                    borderRadius: "50px",
                    border: "none",
                    width: "200px",
                    
                  }}
                  onClick={() => setSelectedProduct(item)}
                  className="btn btn-primary m-3"
                >
                  ${item.price}
                </button>
                <button
                  // id="subtract"
                  style={{
                    borderRadius: "40px",
                    flex: "0.4",
                    border: "none",
                    color: "#990F02",
                    fontSize: "24px",
                    marginTop: "-52.7px",
                    // height: "-10px",
                    width: "50px",
                    backgroundColor: "white",
                    color: "#990F02",
                    marginLeft: "167px",
                  }}
                  onClick={() => addItem(item)}
                >
                  +
                </button>

              </div>
              
              <div style={{
                backgroundColor: "white", 
                width:"15%", 
                height: "15%", 
                position: "absolute",
                zIndex: "1",
                color: "black",
                fontWeight: "normal",
                marginLeft: "225px",
                marginTop: "-200px",
                display: "flex",
                
                fontSize: "14px",
                
                }}> {item.description}</div>
            </div>
            
          ))}
      </div>
    </div>
  );
};
export default MenuCard;