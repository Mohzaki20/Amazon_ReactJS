import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "../reducer/combine";
const store = createStore(combineReducers, composeWithDevTools());

store.subscribe(() => {
  localStorage.setItem("cart", JSON.stringify(store.getState().cart.cart));
});

export default store;
