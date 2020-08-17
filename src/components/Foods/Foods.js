import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import FoodItems from "../FoodItems/FoodItems";
import "./Foods.css";
import loader from "../../assets/loader1.gif";
const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [category, setCategory] = useState("lunch");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3010/foods")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFoods(data);
        setLoading(false);
      });
  }, []);
  //filter foods according to category
  const selectCategory = foods.filter((food) => food.catagories === category);
  console.log(selectCategory);
  return (
    <div className="cat-nav">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
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
                <span
                  className="nav-link"
                  onClick={() => setCategory("dinner")}
                >
                  Dinner
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="container py-3">
        <div className="row">
          {loading ? (
            <img
              src={loader}
              className="img-fluid text-center"
              style={{ width: "200px" }}
              alt=""
            />
          ) : (
            selectCategory.map((food) => (
              <div className="col-md-4 py-2" key={food.keys}>
                <FoodItems foods={food}></FoodItems>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Foods;
