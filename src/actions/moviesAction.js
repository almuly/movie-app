import { createActions } from 'redux-actions';

export const {
  addMovies,
  sortMoviesAsc,
  sortMoviesDesc,
  sortMoviesByRate,
  sortMoviesByDate,
  searchMovies,
} = createActions(
  'ADD_MOVIES',
  'SORT_MOVIES_ASC',
  'SORT_MOVIES_DESC',
  'SORT_MOVIES_BY_RATE',
  'SORT_MOVIES_BY_DATE',
  'SEARCH_MOVIES',
);
