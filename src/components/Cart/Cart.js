import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useHistory } from "react-router-dom";
import CartItems from "../CartItems/CartItems";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  console.log(cart);
  const totalPrice = cart.reduce(
    //curr.quantity is the quantity of the product
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  // console.log(totalPrice);
  let shopMore = useHistory();
  const handleShopMore = () => {
    shopMore.push("/");
  };
  return (
    <div className="container py-3">
      <button className="btn btn-info" onClick={handleShopMore}>
        Shop more
      </button>
      <div className="py-3">
        {cart.map((item) => (
          <CartItems items={item}></CartItems>
        ))}
      </div>
      <h4>{totalPrice === 0 ? "" : totalPrice}</h4>
    </div>
  );
};

export default Cart;
