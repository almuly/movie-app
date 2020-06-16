import { combineReducers } from 'redux';


import loadReducer from './loadReducer';
import productsReducer from './moviesReducer';


const reducers = combineReducers({

  ...loadReducer,
  ...productsReducer,
});

export default reducers;
