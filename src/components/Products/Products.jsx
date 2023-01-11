import React, { useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import './Products.css'
const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
  });

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

  // handling edit changes
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleEdit = (productId) => {
    fetch(`http://127.0.0.1:3000/meals/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedProducts = products.map((product) => {
          if (product.id === productId) {
            return data;
          }
          return product;
        });
        setProducts(updatedProducts);
      });
  };

  const handleDelete = (productId) => {
    // Make a DELETE request to the server to delete the product with the given ID
    fetch(`http://127.0.0.1:3000/meals/${productId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Update the products state to remove the deleted product
        setProducts(products.filter((product) => product.id !== productId));
      });
  };
  console.log(products);


  // delete
  const deleteProduct = (productId) => {
    fetch(`http://127.0.0.1:3000/meals/${productId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Upon successful deletion, update the state of products to exclude the deleted product
        const updatedProducts = products.filter(
          (product) => product.id !== productId
        );
        setProducts(updatedProducts);
      })
      .catch((error) => console.log("Error:", error, error.status));
  };

  

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
              <th>Status</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td className="name">{product.name}</td>
                {/* <td>{product.status}</td> */}
                <td>${product.price}</td>
                <td>
                  <FaEdit />
                </td>
                <td>
                  <ImBin onClick={() => deleteProduct(product.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <div className="pagination-p">
            <p>
              Showing {indexOfFirstItem + 1} to {indexOfLastItem} of{" "}
              {products.length} entries
            </p>
          </div>

          <div className="pagination-buttons">
            <button disabled={currentPage === 1} onClick={prevPage}>
              Previous
            </button>
            <span className="p-2">
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