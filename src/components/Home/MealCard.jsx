import React from "react";
import "./MealCard.css";
function MealCard() {
  return (
    <div class="container-fluid bg-trasparent my-4 p-3">
      <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
        <div class="col">
          <div class="card h-100 shadow-sm">
            <img
              src="https://media.istockphoto.com/id/1339854693/photo/pumpkin-filled-ravioli-pasta-above-table-scene-on-a-dark-background.jpg?b=1&s=170667a&w=0&k=20&c=jKphpHmNNsYr6BGny3WZ722oG2PKPNVy15JysojMQS8="
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <div class="d-grid gap-2 my-4">
                <a href="#" class="btn btn-danger">
                  Main Meals
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 shadow-sm">
            <img
              src="https://media.istockphoto.com/id/1352121918/photo/christmas-new-year-dishes-traditional-festive-salad-with-edible-vegetarian-christmas-trees.jpg?b=1&s=170667a&w=0&k=20&c=uo21pUKhc-aS8Q-GSgexVzID4ABX1bEECG8PY1QEeEg="
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <div class="d-grid gap-2 my-4">
                <a href="#" class="btn btn-danger">
                  Drinks
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MealCard;
