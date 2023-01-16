import React, { useState } from 'react';
import { Switch } from 'react-switch';
import { useRef } from 'react';






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

  function handleChange(event) {
    // access the selected file through event.target.files
    const selectedFile = event.target.files[0];
    // do something with the selected file, such as uploading it to a server
  };

 const inputRef = useRef(null);

  return (
    
    <div style={{ display: 'flex', justifyContent: 'flex-start', backgroundColor: '#EDEEF2', width: "100vw", height: "100vh" }}>
      <div style={{ width: '46.5%', backgroundColor: "yellow", height: "85%", margin: "auto", marginLeft: "40px"}}>
        
          <p style={{marginTop:"20px", marginLeft: "20px"}}>ADD PRODUCT FORM</p>
          <hr style={{width: "100%", marginLeft: "0px"}}/>
          <form style={{
          marginTop: '20px',
          marginLeft: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '85%',
        }}>
          <label style={{marginBottom: "10px"}}>
            Product Name
            <br />
            <input type="text" value={productName} onChange={handleProductNameChange} />
          </label>
          <br />
<div style={{ display: 'flex', justifyContent: 'space-between', width: "95%"}}>
  <label style={{marginBottom: "10px", border: "#D9D9D9", borderRadius: "5px"}}>
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
  <label style={{marginBottom: "10px"}}>
    Price
    <input style={{marginLeft: "20px", border: "#D9D9D9", borderRadius: "5px"}} type="text" value={price} onChange={handlePriceChange} />
  </label>
</div>
<label style={{marginBottom: "1px"}}>
  Description<br />
  <textarea style={{height: "300px", width: "95%", border: "#D9D9D9", borderRadius: "5px"}} value={description} onChange={handleDescriptionChange} />
</label>
          <br />
          
          <br />
          
          <label>
          Product Image
          <br />
          <input type="file" style={{display: "none"}} ref={inputRef} onChange={handleChange}/>
          <input placeholder="Upload image..."/>
          <button style={{backgroundColor: "#D9D9D9", border: "0px", borderRadiusLeft: "5px"}} onClick={() => inputRef.current.click()}>Browse</button>
          
        </label>
        </form>
      </div>
      <div style={{ width: '46.5%', display: 'flex', flexDirection: 'column', backgroundColor: "green", height: "85%", margin: "auto", marginRight: "40px"}}>
        <form style={{
          marginTop: '20px',
          marginLeft: '20px',
          
        }}>
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
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '120px',
              width: '80%',
              margin: "auto",
              // borderRadius: "5px",
              // border: "0px solid #990F02",
              // flexDirection: 'row',
              // justifyContent: 'space-between',
              // alignItems: 'center',
              // width: '80%',
              marginTop: '210px',
              
            }}>
        
          <button onClick={handleSaveProduct} style={{display: 'inline-block', backgroundColor: '#990F02', color: 'white', width: "250px", height: "35px", border: "0px", borderRadius: "5px"}}>Save</button>
          <button onClick={handleSaveProduct} style={{display: 'inline-block', backgroundColor: '#990F02', color: 'white', width: "250px", height: "35px", border: "0px", borderRadius: "5px"}}>Save and Add</button>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminHomePage;


