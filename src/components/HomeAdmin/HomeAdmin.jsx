// import React from 'react';
// import { NavItem } from 'react-bootstrap';
// import NavbarAdmin from './NavbarAdmin';



// // const [image, setImage] = useState(null);

// const AdminHomePage = () => {
//   return (
//     <div style={{ display: 'flex', justifyContent: "space-around", backgroundColor: "#EDEEF2", height: "100vh", width: "100vw"}}>
//       <div style={{ height: 620, width: 651, backgroundColor: "white", marginTop: "95px", marginLeft: "40px"}}>
//         <h6 style={{marginLeft: "20px", marginTop: "15px"}}>ADD PRODUCT FORM</h6>
//         <hr />
//         <label style={{marginLeft: "20px",}}>Product Name</label>
//         <br />
//         <input type="text" style={{marginLeft: "20px", width: "93%", marginBottom: "10px", borderRadius: "5px", border: "2px solid #blue;" }} />
//         <br />
//         <label style={{marginLeft: "20px"}}>Select Category</label>
//         <label style={{marginLeft: "250px"}}>Price</label>
//         <br />
//         <select  style={{marginLeft: "20px", marginBottom: "10px", width: "40%", height: "4.5%", borderRadius: "5px"}} >
//           <option value="category1">Main Meals</option>
//           <option value="category2">Drinks</option>
//           <option value="category3">Dessert</option>
//           <option value="category2">Salads</option>
//           <option value="category3">Light Bites</option>
//         </select>
//         {/* <label style={{marginLeft: "20px"}}>Price</label> */}
        
//         <input type="text" style={{marginLeft: "94px", marginBottom: "10px", borderRadius: "5px"}} />
//         <br />
//         <label style={{marginLeft: "20px",}}>Description</label>
//         <br />
//         <input type="text" style={{marginLeft: "20px", width: "93%", height: "42%", marginBottom: "10px", borderRadius: "5px"}} />
//         <br />
//         <label style={{marginLeft: "20px"}}>Product Image</label>
//         <br />
//         <input type="text" placeholder="Upload image..." style={{marginLeft: "20px", borderRadius: "5px"}}/>
//         <input type="file" onChange={(event) => {
//             const file = event.target.files[0];
//           }} />
          

          
          
//       </div>
//       <div style={{ height: 620, width: 651, backgroundColor: "white", marginTop: "95px"  }}>
//         <h6 style={{marginLeft: "20px", marginTop: "15px"}}>PRODUCT</h6>
//         <hr />
//         <img 
//         src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
//         alt="product"
//         style={{height: "250px", display: "block", margin: "0 auto"}} />
//         <br />
//         <label style={{marginLeft: "20px", marginTop: "40px"}}>Status Available</label>
//         <label class="switch" style={{marginLeft: "330px"}}>
//         <input type="checkbox" />
//         <span class="slider round"></span>
//       </label>
        
//         <br />
//         <hr />
//         <label style={{marginLeft: "20px"}}>Today's Special</label>
//         <label class="switch" style={{marginLeft: "330px"}}>
//         <input type="checkbox" />
//         <span class="slider round"></span>
//       </label>
        
//         {/* <input type="checkbox" style={{ backgroundColor: '#990F02' }} /> */}
//         <br />
//         <hr />
//         <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: "20px", marginRight: "20px", }}>
//           <button style={{ backgroundColor: "#990F02", marginTop: "30px", width: "35%", height: "35px", border: "none", borderRadius: "5px", color: "white", }}>Save</button>
//           <button style={{ backgroundColor: '#990F02', marginTop: "30px", width: "35%", border: "none", borderRadius: "5px", color: "white", height: "35px" }}>Save and Add</button>
//         </div>
//       </div>
//       <div><NavbarAdmin/></div>
//     </div>

//   );
// }

// export default AdminHomePage;


import React, { useState } from 'react';
import { NavItem } from 'react-bootstrap';
import NavbarAdmin from './NavbarAdmin';

const AdminHomePage = () => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send product data to server here
    fetch("http://127.0.0.1:3000/");
    console.log(product);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#EDEEF2",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          height: 620,
          width: 651,
          backgroundColor: "white",
          marginTop: "95px",
          marginLeft: "40px",
        }}
      >
        <h6 style={{ marginLeft: "20px", marginTop: "15px" }}>
          ADD PRODUCT FORM
        </h6>
        <hr />
        <form onSubmit={handleSubmit}>
          <label style={{ marginLeft: "20px" }}>Product Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            style={{
              marginLeft: "20px",
              width: "93%",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "2px solid #blue;",
            }}
          />
          <br />
          <label style={{ marginLeft: "20px" }}>Select Category</label>
          <label style={{ marginLeft: "250px" }}>Price</label>
          <br />
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            style={{
              marginLeft: "20px",
              marginBottom: "10px",
              width: "40%",
              height: "4.5%",
              borderRadius: "5px",
            }}
          >
            <option value="1">Main Meals</option>
            <option value="2">Drinks</option>
            <option value="3">Dessert</option>
            <option value="4">Salads</option>
            <option value=" 5">Light Bites</option>
          </select>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleChange}
            style={{
              marginLeft: "94px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          />
          <br />
          <label style={{ marginLeft: "20px" }}>Description</label>
          <br />
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
            style={{
              marginLeft: "20px",
              width: "93%",
              height: "42%",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          />
          <br />
          <label style={{ marginLeft: "20px" }}>Product Image URL</label>
          <br />
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            style={{
              marginLeft: "20px",
              width: "93%",
              height: "42%",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          />
          <button
            type="submit"
            style={{ marginLeft: "20px", marginTop: "10px" }}
          >
            Submit
          </button>
        </form>
      </div>
      <div
        style={{
          height: 620,
          width: 651,
          backgroundColor: "white",
          marginTop: "95px",
        }}
      >
        <h6 style={{ marginLeft: "20px", marginTop: "15px" }}>PRODUCT</h6>
        <hr />
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="product"
          style={{ height: "250px", display: "block", margin: "0 auto" }}
        />
        <br />
        <label style={{ marginLeft: "20px", marginTop: "40px" }}>
          Status Available
        </label>
        <label class="switch" style={{ marginLeft: "330px" }}>
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default AdminHomePage;



