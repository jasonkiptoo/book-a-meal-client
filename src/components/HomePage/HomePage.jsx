import React, { useEffect, useState } from 'react'
import Navbar from '../NavBar/NavBar';
import Specials from '../Specials/Specials';
import RenderMeals from './RenderMeals'



// import './Menu.css'

const HomePage = () => {

    const [ menu, setMenu ] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetch("http://127.0.0.1:3000/categories", {
          headers: {
         Authorization: `Bearer ${localStorage.getItem("token")}`,
       },
        })
        .then(res => res.json())
        .then(data => setMenu(data))
    }, [])

    console.log(menu);

  return (
    <div className="menu" style={{backgroundColor: "#EDEEF2", height: "100vh"}}>

      <div><Navbar/></div>
      <div
      // style={{backgroundColor: "yellow", height: "25%", margin: "50px", width: "25%", marginLeft: "550px", borderRadius: "50px"}}
      >
        <Specials />
      </div>

      {/* <div className="d-flex row justify-content-between"> */}
       <div className="row row-cols-5 mt-5" style={{
        margin: "50px",



       }}>
        {menu &&
          menu.map((item) => (
            <div key={item.id} className="menu-item">
              <div className="card" style={{backgroundColor: "transparent", border: "none", }}>
                <img
                  src={item.image_url}
                  alt="piktcha"
                  className="img-fluid"
                  style={{height: "250px", width: "200px", borderRadius: "30px", margin: "25px"}}
                ></img>
                <button
                  style={{ backgroundColor: "#990F02", borderRadius: "50px", border: "none",}}
                  onClick={() => setSelectedProduct(item)}
                  className="btn btn-primary m-3"
                >
                  View {item.name}
                </button>
              </div>
            </div>
          ))}
      </div>
      {selectedProduct && <RenderMeals meals={selectedProduct.meals} />}
    </div>
  );
 }

export default HomePage


/* <div key={item.id} className="menu-item">
          <div class="container">
            <div class="card">
        <div class="row d-flex justify-content-between">
        <div class="col-sm-4"> */
