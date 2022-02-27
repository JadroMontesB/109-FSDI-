import React from "react";
import Cart from "../components/cart";
import Product from "./../components/product";

const storeContext = React.createContext({
  cart: [],
  user: {},

  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {},
});

export default storeContext;
