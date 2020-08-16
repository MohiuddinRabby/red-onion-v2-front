import React from "react";
import "./FoodItems.css";
const FoodItems = (props) => {
  const { title, img, price, catagories } = props.foods;
  return (
    <div className="card text-center">
      <div className="foodItem-card-img">
        <img src={img} alt="food" />
      </div>
      <h5>{title}</h5>
      <h5>${price}</h5>
      <h6>{catagories}</h6>
    </div>
  );
};

export default FoodItems;
