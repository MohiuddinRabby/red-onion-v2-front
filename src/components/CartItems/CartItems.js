import React from "react";

const CartItems = (props) => {
  // console.log(props);
  const { name, price, quantity } = props.items;
  return (
    <div>
      <h1>Items:</h1>
      <div className="card">
        <div className="card-body">
          <h3>{name}</h3>
          <h3>{price}</h3>
          <p>{quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
