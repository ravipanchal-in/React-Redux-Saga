import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, PRODUCT_LIST, SET_PRODUCT_LIST } from "../types";

export const addToCart = (data) => {
  return { type: ADD_TO_CART, payload: data }
}
export const removeFromCart = (data) => {
  return { type: REMOVE_FROM_CART, payload: data }
}
export const clearCart = () => {
  return { type: CLEAR_CART }
}
export const productList = () => {
  return { type: PRODUCT_LIST }
}





