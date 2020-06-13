import { handleActions } from "redux-actions";

// actions
import {
  addMovies,
  sortMoviesAsc,
  sortMoviesDesc,
  searchMovies,
} from "../actions";

import { moviesState } from "../constants/defaultState";

export default {
  movies: handleActions(
      {
          [addMovies]:(state, { payload = [] }) => ({
              current:payload,
              origin:payload,

          }),
          [sortMoviesAsc]:(state) => {
              const newState = [...state.current];
              newState.sort ((a, b) => b.vote_average - a.vote_average);
              return { ...state, current:newState};
          },
          [sortMoviesDesc]:(state) => {
              const newState = [...state.current];
              // newState.sort ((a, b) => b.vote_count - a.vote_count);
              newState.sort((a, b) =>{
                  const dateA= new Date(a.release_date), dateB=new Date(b.release_date)
                  return dateB-dateA //сортировка по возрастающей дате
              })
              return { ...state, current:newState };
          },
      },
    moviesState
  ),
};
