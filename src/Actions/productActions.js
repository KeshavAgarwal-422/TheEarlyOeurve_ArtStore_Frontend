import axios from "axios";
import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_FEATUREDPRODUCT_REQUEST,
  ALL_FEATUREDPRODUCT_SUCCESS,
  ALL_FEATUREDPRODUCT_FAIL,
  ALL_PAINTING_REQUEST,
  ALL_PAINTING_SUCCESS,
  ALL_PAINTING_FAIL,
  ALL_DRAWING_REQUEST,
  ALL_DRAWING_SUCCESS,
  ALL_DRAWING_FAIL,
  ALL_SCULPTURE_REQUEST,
  ALL_SCULPTURE_SUCCESS,
  ALL_SCULPTURE_FAIL,
  ADMIN_PRODUCT_REQUEST,
  ADMIN_PRODUCT_SUCCESS,
  ADMIN_PRODUCT_FAIL,
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_FAIL,
  NEW_PRODUCT_RESET,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_RESET,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_RESET,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  CLEAR_ERRORS,
} from "../Constants/productConstants";
import { BASE_URL } from "../Utils/baseURL";

// dispatch is a function of type async

export const getProduct = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCT_REQUEST });

    const { data } = await axios.get(
      `${BASE_URL}/api/product?keyword=${keyword}`,
      {
        "Content-Type": "application/json",
      }
    );

    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: data,
      keyword: keyword,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getFeaturedProducts = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_FEATUREDPRODUCT_REQUEST });

    const { data } = await axios.get(`${BASE_URL}/api/product/featured`, {
      "Content-Type": "application/json",
    });

    dispatch({
      type: ALL_FEATUREDPRODUCT_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: ALL_FEATUREDPRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getPaintings = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PAINTING_REQUEST });

    const { data } = await axios.get(`${BASE_URL}/api/product/paintings`, {
      "Content-Type": "application/json",
    });

    dispatch({
      type: ALL_PAINTING_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: ALL_PAINTING_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getDrawings = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_DRAWING_REQUEST });

    const { data } = await axios.get(`${BASE_URL}/api/product/drawings`, {
      "Content-Type": "application/json",
    });

    dispatch({
      type: ALL_DRAWING_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: ALL_DRAWING_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getSculptures = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_SCULPTURE_REQUEST });

    const { data } = await axios.get(`${BASE_URL}/api/product/sculptures`, {
      "Content-Type": "application/json",
    });

    dispatch({
      type: ALL_SCULPTURE_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: ALL_SCULPTURE_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getAdminProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_PRODUCT_REQUEST });
    const token = localStorage.getItem("token");

    const { data } = await axios.post(`${BASE_URL}/api/product/admin`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: ADMIN_PRODUCT_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const createProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PRODUCT_REQUEST });
    const token = localStorage.getItem("token");

    const { data } = await axios.post(
      `${BASE_URL}/api/product/admin/newproduct`,
      productData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({
      type: NEW_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const updateProduct = (id, productData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PRODUCT_REQUEST });
    const token = localStorage.getItem("token");
    const { data } = await axios.put(
      `${BASE_URL}/api/product/admin/${id}`,
      productData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({
      type: UPDATE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });
    const token = localStorage.getItem("token");
    const { data } = await axios.delete(`${BASE_URL}/api/product/admin/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`${BASE_URL}/api/product/${id}`, {
      "Content-Type": "application/json",
    });

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
