import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

export default function cartDataReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      console.log('ADD_TO_CART : ', state);
      return [action.payload, ...state];
    default:
      return state;
  }
}