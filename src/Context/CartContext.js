import React from "react";
import { createContext } from "react";
import { useState } from "react";
export const CartContext = createContext();
export const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
