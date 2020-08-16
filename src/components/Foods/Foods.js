import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import FoodItems from "../FoodItems/FoodItems";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [category, setCategory] = useState("lunch");
  useEffect(() => {
    fetch("http://localhost:3010/foods")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFoods(data);
      });
  }, []);
  const selectCategory = foods.filter((food) => food.catagories === category);
  console.log(selectCategory);
  return (
    <div className="container">
      <h1>This is foods</h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <span
                className="nav-link"
                onClick={() => setCategory("breakfast")}
              >
                Breakfast
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => setCategory("lunch")}>
                Lunch
              </span>
            </li>

            <li className="nav-item">
              <span className="nav-link" onClick={() => setCategory("dinner")}>
                Dinner
              </span>
            </li>
          </ul>
        </div>
      </nav>
      <div className="row">
        {selectCategory.map((food) => (
          <div className="col-md-4">
            <FoodItems foods={food}></FoodItems>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
