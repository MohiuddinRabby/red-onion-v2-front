import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Foods = () => {
  const [foods, setFoods] = useState();
  const [category, setCategory] = useState("Lunch");
  useEffect(() => {
    fetch("http://localhost:3010/foods")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFoods(data);
      });
  }, []);
  return (
    <div className="container">
      <h1>This is foods</h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <Link className="nav-link">Breakfast</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Lunch</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link">Dinner</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Foods;
