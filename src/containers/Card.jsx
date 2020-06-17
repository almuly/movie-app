/* eslint-disable react/prop-types */
import React from "react";

import { compose } from "redux";
import { connect } from "react-redux";
import "../styles/containers/Card.css";
import { useHistory } from "react-router";

// eslint-disable-next-line react/prop-types
const Card = ({ movie }) => {
  const history = useHistory();

  const handleClick = (movieId) => () => {
    history.push(`/film/${movieId}`);
  };

  return (
    <div className="movie__item" onClick={handleClick(movie.id)}>
      <div className="movie__img-wrap">
        <img className="movie__img" src={movie.poster_path} alt={movie.title} />
      </div>
      <div className="movie__info">
        <div className="movie__description">
          <p className="movie__title">{movie.title}</p>
          <span className="movie__release-date">
            {movie.release_date.substring(0, 4)}
          </span>
        </div>
        <div className="movie__votes-genres">
          <p className="movie__genres">
            {movie.genres.splice(0, 2).join(" & ")}
          </p>
          <p className="movie__score">
            rate score
            {movie.vote_average}
          </p>
        </div>
      </div>
    </div>
  );
};
Card.displayName = "Card";
const mapStateToProps = (state) => ({
  movies: state.movies.current,
});
export default compose(connect(mapStateToProps))(Card);
