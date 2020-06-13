import React from "react";

import { compose } from "redux";
import { connect } from "react-redux";
import "../styles/containers/Card.css";
import { useHistory } from "react-router";

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
      <div className="info">
        <span className="description">
          <p className="movie__title">{movie.title}</p>
          <p className="genres">{movie.genres.splice(0, 2).join(" & ")}</p>
        </span>
        <p className="movie__release-date">{movie.release_date}</p>
        <p className="movie__release-date">{movie.vote_average}</p>
      </div>
    </div>
  );
};
Card.displayName = "Card";
const mapStateToProps = (state) => ({
  movies: state.movies.current,
});
export default compose(connect(mapStateToProps))(Card);
