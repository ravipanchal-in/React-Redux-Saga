import { PRODUCT_LIST, SET_PRODUCT_LIST } from "../types";

export default function productReducer(state = [], action) {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      console.log('SET_PRODUCT_LIST>>>>>>>', action.payload);
      return [...action.payload]
    default:
      return state;
  }
}