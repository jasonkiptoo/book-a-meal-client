import React, { useEffect, useState } from "react";

function Specials() {

  const [specials, setSpecials] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/favourites", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setSpecials(data));
  }, []);

  console.log(specials);

  const handleClick = index => {
    setCurrentImage(index);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={specials[currentImage] ? specials[currentImage].meal.image_url: ""} alt="Today's Special" style={{ height: "25vh", borderRadius: "50px", marginTop: "20px" }} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {specials.map((special, index) => (
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
          </button>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          zIndex: "1",
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
          textAlign: "center",
        }}
      >
        Today's Special
      </div>
    </div>
  );
}

export default Specials;

