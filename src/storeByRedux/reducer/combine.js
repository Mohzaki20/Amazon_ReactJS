import { combineReducers } from "redux";
import loadingReducer from "./loading";
import { cartReducer } from "./cartReducer";

export default combineReducers({
  loading: loadingReducer,
  cart: cartReducer,
});
