import axios from "axios";
import { BASE_URL } from "../Utils/baseURL";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  SAVE_SHIPPING_INFO,
} from "../Constants/cartConstants";

export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`${BASE_URL}/product/${id}`, {
    "Content-Type": "application/json",
  });

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product._id,
      name: data.product.productName,
      price: data.product.price,
      image: data.product.images.imgPrimary,
      quantity,
      stock: data.product.stock,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM_REQUEST,
  });
  console.log(id);
  dispatch({
    type: REMOVE_CART_ITEM_SUCCESS,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};
