import React from 'react'

const RenderMeals = ({ meals }) => {
  return (
    <div>
      {meals.map((item) => (
        <div key={item.id} className="meals-item">
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default RenderMeals 