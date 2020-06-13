export const movieTitle = (query, limit) =>
  `https://reactjs-cdp.herokuapp.com/movies?search=${query}&searchBy=title&limit=${limit}}&sortBy=vote_average&sortOrder=desc`;
export const movieGenre = (query, limit) =>
  `https://reactjs-cdp.herokuapp.com/movies?search=${query}&searchBy=genres&limit=${limit}&sortBy=vote_average&sortOrder=desc`;
