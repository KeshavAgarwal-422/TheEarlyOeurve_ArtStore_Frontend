import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { cartReducer } from "./Reducer/cartReducer";
import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
} from "./Reducer/orderReducer";

import {
  newProductReducer,
  productDetailsReducer,
  productReducer,
  productsReducer,
  searchProductsReducer,
} from "./Reducer/productReducer";
import {
  allUsersReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
  forgotPasswordReducer,
} from "./Reducer/userReducer";

const reducer = combineReducers({
  searchProducts: searchProductsReducer,
  products: productsReducer,
  productDetails: productDetailsReducer,
  newProduct: newProductReducer,
  product: productReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
  profile: profileReducer,
  newProduct: newProductReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  profile: profileReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  allOrders: allOrdersReducer,
  order: orderReducer,
  cart: cartReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shipingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

//const middelWare = [thunk];        middleware and combine reducer is automatically applied in configure store

const store = configureStore({
  reducer: reducer,
  preloadedState: initialState,
});

export default store;
