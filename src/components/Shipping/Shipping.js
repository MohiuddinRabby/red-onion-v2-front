import React from "react";
import { Link } from "react-router-dom";

const Shipping = () => {
  return (
    <section>
      <form>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Name" />
        </div>
        <div class="form-group">
          <input type="email" class="form-control" placeholder="Eamil" />
        </div>
        <div class="form-group">
          <input
            type="number"
            class="form-control"
            placeholder="Mobile Number"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Address house 24/7"
          />
        </div>
        <Link className="btn btn-outline-danger">
          Submit
        </Link>
      </form>
    </section>
  );
};

export default Shipping;
