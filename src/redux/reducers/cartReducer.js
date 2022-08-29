import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../types";

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [action.payload, ...state];
    case REMOVE_FROM_CART:
      const remainingItems = state.filter((item) => item.id != action.payload)
      console.log('remainingItems', remainingItems);
      return [...remainingItems];
    case CLEAR_CART:
      state = []
      return [...state]
    default:
      return state;
  }
}