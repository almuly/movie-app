/* eslint-disable quotes */
import React from "react";

const ModalCard = ({ movie }) => {
  const modalCardStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${movie.poster_path})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    height: "100%",
    minHeight: 400,
    color: "white",
    padding: 10,
  };
  return (
    <div style={modalCardStyle}>
      <h1>{movie.title}</h1>
      <h5>{movie.genres}</h5>
      <p>{movie.overview}</p>
      <p>
        Popularity:
        {movie.vote_count}
      </p>
      <p>Budget: ${movie.budget}</p>
    </div>
  );
};
export default ModalCard;
