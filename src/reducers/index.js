import { combineReducers } from 'redux';


import loadReducer from './loadReducer';
import moviesReducer from './moviesReducer';


const reducers = combineReducers({

  ...loadReducer,
  ...moviesReducer,
});

export default reducers;
