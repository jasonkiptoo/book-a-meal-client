import React from 'react'
import MenuCard from './MenuCard';

const RenderMeals = ({ meals }) => {
  return (
    <div>
          <div className="orders row row-cols-3 mt-5">
          {meals.map((item, index) => {
            return <MenuCard key={index} item={item} />;
          })}


        </div>





    </div>
  );
};

export default RenderMeals
