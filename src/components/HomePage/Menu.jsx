import React, { useEffect, useState } from 'react'
import Specials from '../Specials/Specials';
import RenderMeals from './RenderMeals'

const Menu = () => {

    const [ menu, setMenu ] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetch("http://127.0.0.1:3000/categories")
        .then(res => res.json())
        .then(data => setMenu(data))
    }, [])

    return (
      <div>
        <div>
          <Specials />
        </div>
        Menu
        {menu.map((item) => (
          <div key={item.id} className="menu-item">
            <div className="card">
              <img src={item.image_url} alt="piktcha"></img>
            </div>
            <button onClick={() => setSelectedProduct(item)}>View Meals</button>
          </div>
        ))}
        {selectedProduct && <RenderMeals meals={selectedProduct.meals} />}
      </div>
    );
}

export default Menu