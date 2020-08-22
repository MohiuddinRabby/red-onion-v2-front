import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useHistory } from "react-router-dom";
import CartItems from "../CartItems/CartItems";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  // console.log(cart);
  //price calculation

  const unitPrice = cart.reduce(
    //curr.quantity is the quantity of the product
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  let shipping = 0;
  if (unitPrice > 35) {
    shipping = 0;
  } else if (unitPrice <= 35 && unitPrice >= 20) {
    shipping = 1;
  } else if (unitPrice > 0) {
    shipping = 2;
  }
  const totalPrice = unitPrice + shipping;
  //
  // console.log(totalPrice);
  let shopMore = useHistory();
  const handleShopMore = () => {
    shopMore.push("/");
  };
  return (
    <div className="container py-5">
      <button className="btn btn-info" onClick={handleShopMore}>
        Shop more
      </button>
      <div className="py-5">
        <div className="row">
          <div className="col-md-4">
            <h1>Shipping address Cart component</h1>
          </div>
          <div className="col-md-4">
            {cart.length === 0 ? (
              <div>
                <h2 className="text-danger">No item selected</h2>
                <button className="btn btn-info" onClick={handleShopMore}>
                  Go to shop
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <CartItems items={item} key={item.keys}></CartItems>
              ))
            )}
          </div>
          <div className="col-md-4">
            <h3>Pricing</h3>
            <hr />
            <h4>Unit Price: ${unitPrice}</h4>
            <p>*shipping cost: ${shipping}</p>
            <hr />
            <h3>total price: ${totalPrice}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
