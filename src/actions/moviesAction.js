import { createActions } from "redux-actions";

export const { addMovies, sortMoviesAsc, sortMoviesDesc, searchMovies } = createActions(
  "ADD_MOVIES",
  "SORT_MOVIES_ASC",
  "SORT_MOVIES_DESC","SEARCH_MOVIES"
);
