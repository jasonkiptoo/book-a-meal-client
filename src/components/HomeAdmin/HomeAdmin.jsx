import React, { useState } from 'react';
import { Switch } from 'react-switch';





const AdminHomePage = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [category, setCategory] = useState('');
  const [todaySpecial, setTodaySpecial] = useState(false);
  const [availability, setAvailability] = useState(true);

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleProductImageChange = (event) => {
    setProductImage(event.target.files[0]);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleTodaySpecialChange = (event) => {
    setTodaySpecial(event.target.checked);
  };

  const handleAvailabilityChange = (event) => {
    setAvailability(event.target.checked);
  };

  const handleSaveProduct = () => {
    // Save product to database or API here
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#EDEEF2', width: "100vw", height: "100vh" }}>
      <div style={{ width: '40%', backgroundColor: "white", height: "75%" }}>
        <form>
          <p>ADD PRODUCT FORM</p>
          <hr />
          <label>
            Product Name
            <br />
            <input type="text" value={productName} onChange={handleProductNameChange} />
          </label>
          <br />
          <label>
            Select Category 
            <select value={category} onChange={handleCategoryChange}>
              <option value="">Select a category</option>
              <option value="category1">Main Meals</option>
              <option value="category2">Drinks</option>
              <option value="category3">Dessert</option>
              <option value="category3">Salads</option>
              <option value="category3">Light Bites</option>
            </select>
          </label>
          <label>
            Price:
            <input type="text" value={price} onChange={handlePriceChange} />
          </label>
          <br />
          <label>
            Description<br />
            <textarea value={description} onChange={handleDescriptionChange} />
          </label>
          <br />
          
          <br />
          
          <label>
          Product Image:
          <input type="file" onChange={handleProductImageChange} />
        </label>
        </form>
      </div>
      <div style={{ width: '40%', display: 'flex', flexDirection: 'column', backgroundColor: "white", height: "75%" }}>
      <p>PRODUCT</p>
          <hr />
        <img src={productImage} alt="Uploaded product image" style={{ width: '200px', height: '200px' }} />
        <label>
          Status Available
          <input type="checkbox" checked={availability} onChange={handleAvailabilityChange} />
        </label>
        

        <hr />
          <label>
            Today's Special
            <input type="checkbox" checked={todaySpecial} onChange={handleTodaySpecialChange} />
          </label>
          <hr />
          <br />
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '50%',
            

          }}>
          <button onClick={handleSaveProduct}>Save</button>
          <button onClick={handleSaveProduct}>Save and Add</button>
          </div>
      </div>
    </div>
  );
};

export default AdminHomePage;


