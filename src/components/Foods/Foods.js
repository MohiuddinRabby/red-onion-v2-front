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
    fetch("https://gentle-meadow-32238.herokuapp.com/foods")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        setLoading(false);
      });
  }, []);
  //filter foods according to category
  const selectCategory = foods.filter((food) => food.catagories === category);
  return (
    <div className="cat-nav">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item" onClick={() => setCategory("breakfast")}>
                <span
                  className={
                    category === "breakfast" ? "actives nav-link " : "nav-link"
                  }
                >
                  Breakfast
                </span>
              </li>
              <li className="nav-item" onClick={() => setCategory("lunch")}>
                <span
                  className={
                    category === "lunch" ? "actives nav-link " : "nav-link"
                  }
                >
                  Lunch
                </span>
              </li>

              <li className="nav-item" onClick={() => setCategory("dinner")}>
                <span
                  className={
                    category === "dinner" ? "actives nav-link " : "nav-link"
                  }
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
