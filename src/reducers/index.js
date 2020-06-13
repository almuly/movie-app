import { combineReducers } from "redux";

import basketReducer from "./modalReducer";
import loadReducer from "./loadReducer";
import productsReducer from "./moviesReducer";


const reducers = combineReducers({
  ...basketReducer,
  ...loadReducer,
  ...productsReducer,
});

export default reducers;
