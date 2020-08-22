import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import navBrand from "../../assets/img/logo2.png";
const Nav = () => {
  const [cart, setCart] = useContext(CartContext);
  return (
    <nav className="navbar navbar-expand-lg">
      <span className="navbar-brand">
        <img
          src={navBrand}
          style={{ width: "25%", height: "40px" }}
          alt=""
        />
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li>
            <Link to="/cart" className="nav-link">
              Cart {cart.length}
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/login">Login</Link>
          </li>
          <li className="nav-link">
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
