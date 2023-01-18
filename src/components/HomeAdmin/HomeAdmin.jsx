import React from 'react';
import { NavItem } from 'react-bootstrap';

const AdminHomePage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ height: 820, width: 651 }}>
        <h2>Add Product Form</h2>
        <hr />
        <label>Product Name:</label>
        <input type="text" placeholder="Enter product name" />
        <br />
        <label>Select Category:</label>
        <select>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </select>
        <br />
        <label>Price:</label>
        <input type="text" placeholder="Enter price" />
        <br />
        <label>Description:</label>
        <input type="text" placeholder="Enter description" />
        <br />
        <label>Product Image:</label>
        <input type="text" placeholder="Upload image..." />
        <button>Browse</button>
      </div>
      <div style={{ height: 820, width: 651 }}>
        <h2>Product</h2>
        <hr />
        <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product" />
        <br />
        <label>Status Available:</label>
        <input type="checkbox" style={{ backgroundColor: '#990F02' }} />
        <br />
        <hr />
        <label>Today's Special:</label>
        <input type="checkbox" style={{ backgroundColor: '#990F02' }} />
        <br />
        <hr />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button style={{ backgroundColor: '#D9D9D9' }}>Save</button>
          <button style={{ backgroundColor: '#D9D9D9' }}>Save and Add</button>
        </div>
      </div>
    </div>
  );
}

export default AdminHomePage;



