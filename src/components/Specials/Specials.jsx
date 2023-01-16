// import React, { useEffect, useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
// import Navbar from '../NavBar/NavBar';



// const Specials = () => {
//   const [specials, setSpecials] = useState([]);

//   useEffect(() => {
//      fetch("http://127.0.0.1:3000/favourites", {
//        headers: {
//          Authorization: `Bearer ${localStorage.getItem("token")}`,
//        },
//      })
//        .then((res) => res.json())
//        .then((data) => setSpecials(data));
//   }, []);

//   return (
    
//     <div className="carousel-container">
//       <Carousel className="carousel-component" style={{backgroundColor: "green"}}>
//         {specials.map((special) => (
//           <Carousel.Item key={special.meal_id}>
//             <img
//               className="d-block w-100 h-25"
//               src={special.meal.image_url}
//               alt={special.meal.name}
//             />
//             <Carousel.Caption>
//               <h3>{special.meal.name}</h3>
//               <p>{special.meal.description}</p>
//               <p> <em>Price: ${special.meal.price}</em></p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//       <h1>Satan</h1>
//     </div>
//   );
// };

// export default Specials;

// import React, { useEffect, useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
// import './Specials.css'

// const Specials = () => {
//   const [specials, setSpecials] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//      fetch("http://127.0.0.1:3000/favourites", {
//        headers: {
//          Authorization: `Bearer ${localStorage.getItem("token")}`,
//        },
//      })
//        .then((res) => res.json())
//        .then((data) => setSpecials(data));
//   }, []);

//   const handleSliderClick = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <div className="carousel-container" style={{
//       backgroundColor: "green",
//       width: "100%",
//       height: "100%",
//     }}>
//       <Carousel className="carousel-component" style={{
//       backgroundColor: "yellow",
//       width: "100%",
//       height: "100%",
//     }}>
//         {specials.map((special, index) => (
//           <Carousel.Item key={special.meal_id}>
//             <img
//               className="d-block w-100 h-25"
//               src={special.meal.image_url}
//               alt={special.meal.name}
//             />
//             <Carousel.Caption>
//               <h3>{special.meal.name}</h3>
//               <p>{special.meal.description}</p>
//               <p> <em>Price: ${special.meal.price}</em></p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//       <div className="slider-container">
//         {specials.map((special, index) => (
//           <div
//             key={special.meal_id}
//             className={`slider ${index === currentSlide ? 'active' : ''}`}
//             onClick={() => handleSliderClick(index)}
//           />
//         ))}
//       </div>
//       <div className="todays-special-tag">
//         <div className="todays-special-text">Today's Special</div>
//       </div>
//     </div>
//   );
// };

// export default Specials;
import { display, textAlign, width } from "@mui/system";
import React, { useState } from "react";
import Navbar from '../NavBar/NavBar';


function Specials() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
  ];

  const handleClick = index => {
    setCurrentImage(index);
  };

  return (
    
    <div>
      {/* <Navbar /> */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src={images[currentImage]} alt="Today's Special" style={{ height: "25vh", borderRadius: "50px", marginTop: "20px" }} />
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            style={{
              backgroundColor: currentImage === index ? "maroon" : "#D9D9D9",
              margin: "15px",
              marginBottom: "-40px",
              height: "20px",
              width: "80px",
              border: "none",
              borderRadius: "25px",
            }}
          >
            {/* {index + 1} */}
          </button>
        ))}
      </div>
      <div style={{
        position: "absolute",
        zIndex: "1",
        // bottom: "10px",
        // right: "10px",
        backgroundColor: "#990F02",
        color: "white",
        borderRadius: "50px",
        fontWeight: "bold",
        width: "100px",
        height: "100px",
        marginLeft: "810px",
        marginTop: "-100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "16px",
        textAlign: "center"
        
      }}>
        Today's Special
      </div>
    </div>
  );
}

export default Specials;

