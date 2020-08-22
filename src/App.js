import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import FoodItemsDetails from "./components/FoodItemsDetails/FoodItemsDetails";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Cart from "./components/Cart/Cart";
import { CartContextProvider } from "./Context/CartContext";
function App() {
  return (
    <>
      <Router>
        <CartContextProvider>
          <Nav></Nav>
          <Switch>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/details/:keys">
              <FoodItemsDetails></FoodItemsDetails>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/cart">
              <Cart></Cart>
            </Route>
          </Switch>
        </CartContextProvider>
      </Router>
    </>
  );
}

export default App;
