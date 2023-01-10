import React, { useEffect, useState } from 'react'

const Specials = () => {
    const [specials, setSpecials] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:3000/favourites")
          .then((res) => res.json())
          .then((data) => setSpecials(data));

    }, [])

    return (
      <div>
        Specials
        {specials.map((special) => (
          <div key={special.meal_id}>
            <h2>{special.meal.name}</h2>
            <img src={special.meal.image_url} alt={special.meal.name} />
            <p>{special.description}</p>
            <p>Price: ${special.meal.price}</p>
          </div>
        ))}
      </div>
    );
}

export default Specials