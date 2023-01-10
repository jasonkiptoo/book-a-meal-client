import React from "react";
import "./MealCard.css";
function MealCard() {
  return (
    <div class="container mx-auto mt-4">
      <div class="row">
        <div class="cardc col-md-4">
          <div class="card">
            <img
              src="https://media.istockphoto.com/id/1339854693/photo/pumpkin-filled-ravioli-pasta-above-table-scene-on-a-dark-background.jpg?b=1&s=170667a&w=0&k=20&c=jKphpHmNNsYr6BGny3WZ722oG2PKPNVy15JysojMQS8="
              height={300}
              class="card-img-top"
              alt="..."
            />
          </div>
          <div class="card-body">
            <button className="btn btn-danger btn-block">Main Meals</button>
          </div>
        </div>

        <div class="cardc col-md-4">
          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              height={300}
              class="card-img-top"
              alt="..."
            />
          </div>
          <div class="card-body">
            <button type="button" className="btn btn-danger">
              Drinks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MealCard;
