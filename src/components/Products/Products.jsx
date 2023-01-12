import React, { useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import './Products.css'


const Products = () => {

  // States
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [startingIndex, setStartingIndex] = useState(1);
  const [editingProductId, setEditing] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
  });


  // Get all products
  useEffect(() => {
    fetch("http://127.0.0.1:3000/meals", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  /* Pagination Logic */

  // Calculate the number of pages needed
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Determine which products should be displayed on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // Next and previous button functionality
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
    setStartingIndex(startingIndex - itemsPerPage);
  };
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    setStartingIndex(startingIndex + itemsPerPage);
  };


  const handleEdit = (productId) => {
    const updatedProduct = {
      name: formData.name,
      price: formData.price,
    };

    fetch(`http://127.0.0.1:3000/meals/${productId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        // Update the products state with the updated product information
        const updatedProducts = products.map((product) => {
          if (product.id === productId) {
            return { ...product, ...updatedProduct };
          }
          return product;
        });
        setProducts(updatedProducts);
      })
      .catch((error) => console.log("Error:", error, error.status));
  };

   const handleCancelEdit = () => {
     setEditing(null);
   };

   const handleEditFormSubmit = (event) => {
     event.preventDefault();
     handleEdit(editingProductId);
     setEditing(null);
   };

  // handling edit changes
  const handleChange = (event) => {
    event.preventDefault()
    setFormData({ ...formData, [event.target.name]: event.target.value });
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

  

  return (
    <div className="container">
      {/* NAVBAR HERE */}
      <div className="products-container">
        <h2 className="text-left">PRODUCT LIST</h2>
        <form onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((product, index) => (
                <tr key={product.id}>
                  <td>{startingIndex + index}</td>
                  <td className="name">{product.name}</td>
                  <td>${product.price}</td>
                  <td>
                  {/* logic to hide edit button on editing */}
                    {editingProductId !== product.id ? (
                      <FaEdit onClick={() => setEditing(product.id)} />
                    ) : (
                      <>
                        <input
                          className="form-input"
                          type="text"
                          required="required"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Edit Name"
                        />
                        <input
                          className="form-input"
                          type="text"
                          required="required"
                          name="price"
                          value={formData.price}
                          onChange={handleChange}
                          placeholder="Edit Price"
                        />
                        <button className="save-button" type="submit">
                          Save
                        </button>
                        <button
                          className="cancel-button"
                          onClick={handleCancelEdit}
                        >
                          Cancel
                        </button>
                      </>
                    )}
                  </td>
                  <td>
                  {/* logic to hide delete icon on editing */}
                    {editingProductId !== product.id ? (
                      <ImBin onClick={() => handleDelete(product.id)} />
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
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