import axios from "axios";
import store from "../storeByRedux/store/store";
import { changeLoading } from "../storeByRedux/action/changeLoading";
const Instance = axios.create({
  baseURL: "https://dummyjson.com/products",
});

Instance.interceptors.request.use(
  (req) => {
    store.dispatch(changeLoading(true));
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

Instance.interceptors.response.use(
  (res) => {
    store.dispatch(changeLoading(false));
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default Instance;
