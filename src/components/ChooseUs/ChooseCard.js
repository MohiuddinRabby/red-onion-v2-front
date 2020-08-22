import React from "react";
import imageOne from "../../assets/img/chef-cook-food-33614.png";
import imageTwo from "../../assets/img/adult-blur-blurred-background-687824.png";
import imageThree from "../../assets/img/architecture-building-city-2047397.png";
import { Link } from "react-router-dom";

const ChooseCard = () => {
  return (
    <section>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src={imageTwo} className="card-img-top" alt="" />
            <div className="card-body">
              <h5>Fast responder</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                repudiandae.
              </p>
              <Link to="/" className="text-danger">
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={imageOne} className="card-img-top" alt="" />
            <div className="card-body">
              <h5>A good auto responder</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                repudiandae.
              </p>
              <Link to="/" className="text-danger">
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={imageThree} className="card-img-top" alt="" />
            <div className="card-body">
              <h5>Home delivery</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                repudiandae.
              </p>
              <Link to="/" className="text-danger">
                See more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseCard;
