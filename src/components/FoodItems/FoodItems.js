import React from "react";
import "./FoodItems.css";
import { Link } from "react-router-dom";
const FoodItems = (props) => {
  const { title, img, price, catagories, keys } = props.foods;
  return (
    <div className="card text-center">
      <div className="foodItem-card-img">
        <img src={img} alt="food" />
      </div>
      <h5>
        <Link to={"/details/" + keys}>{title}</Link>
      </h5>
      <h5>${price}</h5>
      <h6>{catagories}</h6>
    </div>
  );
};

export default FoodItems;
