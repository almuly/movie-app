/* eslint-disable import/named,array-callback-return */
import { handleActions } from "redux-actions";

// actions
import {
  addMovies,
  sortMoviesAsc,
  sortMoviesDesc,
  sortMoviesByDate,
  sortMoviesByRate,
} from "../actions";

import { moviesState } from "../constants/defaultState";

export default {
  movies: handleActions(
    {
      [addMovies]: (state, { payload = [] }) => ({
        current: payload,
        origin: payload,
      }),
      [sortMoviesByRate]: (state) => {
        const newState = [...state.current];
        newState.sort((a, b) => {
          if (state.sortOrder === "Asc") {
            return a.vote_average - b.vote_average;
          } else if (state.sortOrder === "Desc") {
            return b.vote_average - a.vote_average;
          }
        });
        return { ...state, current: newState, sortBy: "rate" };
      },
      [sortMoviesByDate]: (state) => {
        const newState = [...state.current];
        newState.sort((a, b) => {
          const dateA = new Date(a.release_date);
          const dateB = new Date(b.release_date);
          if (state.sortOrder === "Asc") {
            return dateA - dateB;
          } else if (state.sortOrder === "Desc") {
            return dateB - dateA;
          }
        });
        return { ...state, current: newState, sortBy: "date" };
      },
      [sortMoviesAsc]: (state) => {
        const newState = [...state.current];
        newState.sort((a, b) => {
          const dateA = new Date(a.release_date);
          const dateB = new Date(b.release_date);
          if (state.sortBy === "rate") {
            return a.vote_average - b.vote_average;
          }
          if (state.sortBy === "date") {
            return dateA - dateB;
          }
        });
        return { ...state, current: newState, sortOrder: "Asc" };
      },
      [sortMoviesDesc]: (state) => {
        const newState = [...state.current];
        newState.sort((a, b) => {
          const dateA = new Date(a.release_date);
          const dateB = new Date(b.release_date);
          if (state.sortBy === "rate") {
            return b.vote_average - a.vote_average;
          }
          if (state.sortBy === "date") {
            return dateB - dateA;
          }
        });
        return { ...state, current: newState, sortOrder: "Desc" };
      },
    },
    moviesState
  ),
};
