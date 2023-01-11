import React, { useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import './Products.css'
const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/meals", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Calculate the number of pages needed
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Determine which products should be displayed on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // Next and previous button functionality
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  console.log(products);
  console.log(currentPage);
  return (
    <div className="container">
      {/* NAVBAR HERE */}
      <div className="products-container">
        <h2 className="text-left">PRODUCT LIST</h2>
        <table>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              {/* <th>Status</th> */}
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className="name">{product.name}</td>
                {/* <td>{product.status}</td> */}
                <td>${product.price}</td>
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
        <div className="pagination">
          <div className='pagination-p'>
            <p>
              Showing {indexOfFirstItem + 1} to {indexOfLastItem} of{" "}
              {products.length} entries
            </p>
          </div>

          <div className="pagination-buttons">
            <button disabled={currentPage === 1} onClick={prevPage}>
              Previous
            </button>
            <span>
              {currentPage} of {totalPages}
            </span>
            <button disabled={currentPage === totalPages} onClick={nextPage}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products