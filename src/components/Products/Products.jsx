import React, { useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import './Products.css'
const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:3000/meals', {
            headers :{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    
    console.log(products);
    return (
      <div>
        Products
        {/* <div className='flex flex-col p-4 gap-3'>
          <table className='w-full border-collapse'>
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Status</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.status}</td>
                  <td>{product.price}</td>
                  <td>
                    <FaEdit />
                  </td>
                  <td>
                    <ImBin />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </div>
    );
}

export default Products