import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import './Special.css'

const Specials = () => {
  const [specials, setSpecials] = useState([]);

  useEffect(() => {
     fetch("http://127.0.0.1:3000/favourites", {
       headers: {
         Authorization: `Bearer ${localStorage.getItem("token")}`,
       },
     })
       .then((res) => res.json())
       .then((data) => setSpecials(data));
  }, []);

  return (
    <div className="carousel-container">
      <Carousel className="carousel-component">
        {specials.map((special) => (
          <Carousel.Item key={special.meal_id}>
            <img
              className="d-block w-100 h-25"
              src={special.meal.image_url}
              alt={special.meal.name}
            />
            <Carousel.Caption>
              <h3>{special.meal.name}</h3>
              <p>{special.meal.description}</p>
              <p> <em>Price: ${special.meal.price}</em></p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Specials;
