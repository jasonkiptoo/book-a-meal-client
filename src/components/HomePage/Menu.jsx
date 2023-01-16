import React, { useEffect, useState } from 'react'
import Specials from '../Specials/Specials';
import RenderMeals from './RenderMeals'

const Menu = () => {

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
      <div>
        <div>
          <Specials />
        </div>
        Menu
        {menu && menu.map((item) => (
          <div key={item.id} className="menu-item">  
          <div class="container">
            <div class="card">     
        <div class="row d-flex justify-content-between">
        <div class="col-sm-4">
              <img src={item.image_url} alt="piktcha"></img>
            </div>
            <button onClick={() => setSelectedProduct(item)}>View {""} {item.name}</button>
          </div>
          </div>
         </div>
        </div>          
        ))}
        {selectedProduct && <RenderMeals meals={selectedProduct.meals} />}
      </div> 
    );
 }

export default Menu