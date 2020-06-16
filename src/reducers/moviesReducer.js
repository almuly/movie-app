import { handleActions } from 'redux-actions';

// actions
import {
  addMovies,
  sortMoviesAsc,
  sortMoviesDesc,
  sortMoviesByDate,
  sortMoviesByRate,
  searchMovies,
} from '../actions';

import { moviesState } from '../constants/defaultState';

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
          if (state.sortOrder === 'Asc') {
            return a.vote_average - b.vote_average;
          }
          return b.vote_average - a.vote_average;
        });
        return { ...state, current: newState, sortBy: 'date' };
      },
      [sortMoviesByDate]: (state) => {
        const newState = [...state.current];
        newState.sort((a, b) => {
          const dateA = new Date(a.release_date);
          const dateB = new Date(b.release_date);
          if (state.sortOrder === 'Asc') {
            return dateA - dateB;
          }
          return dateB - dateA;
        });
        return { ...state, current: newState, sortBy: 'rate' };
      },
      [sortMoviesAsc]: (state) => {
        const newState = [...state.current];
        newState.sort((a, b) => {
          const dateA = new Date(a.release_date);
          const dateB = new Date(b.release_date);
          if (state.sortBy === 'rate') {
            return a.vote_average - b.vote_average;
          }
          return dateA - dateB;
        });
        return { ...state, current: newState, sortOrder: 'Desc' };
      },
      [sortMoviesDesc]: (state) => {
        const newState = [...state.current];
        newState.sort((a, b) => {
          const dateA = new Date(a.release_date);
          const dateB = new Date(b.release_date);
          if (state.sortBy === 'rate') {
            return b.vote_average - a.vote_average;
          }
          return dateB - dateA;
        });
        return { ...state, current: newState, sortOrder: 'Asc' };
      },
    },
    moviesState,
  ),
};
