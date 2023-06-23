/** @format */

import { combineReducers } from "redux";
import cart from "@store/cart/cart.slice";

const rootReducers = combineReducers({
  cart,
});

export default rootReducers;
