const INSTIAL_STATE = {
  loading: false,
};

export default function loadingReducer(state = INSTIAL_STATE, action) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
