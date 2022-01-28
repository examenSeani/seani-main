import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  user: {},
  alumno: {},
  rejoj: {},
  activeTest: false,
  time: 0,
  typeTest: "",
};

function updateState(state = initialState, action) {
  switch (action.type) {
    case "USER":
      return {
        ...state,
        user: action.payload,
      };
    case "ALUMNO":
      return {
        ...state,
        alumno: action.payload,
      };
    case "TIPE":
      return {
        ...state,
        typeTest: action.payload,
      };
    case "TIME":
      return {
        ...state,
        time: action.payload,
      };
    case "TEST":
      return {
        ...state,
        activeTest: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}

const store = createStore(
  updateState,
  composeWithDevTools()
);

export default store;
