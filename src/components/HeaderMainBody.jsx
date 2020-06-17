/* eslint-disable quotes,jsx-a11y/anchor-is-valid,jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import classNames from "classnames";
import {
  sortMoviesAsc,
  sortMoviesDesc,
  sortMoviesByDate,
  sortMoviesByRate,
} from "../actions";

import "../styles/components/HeaderMainBody.css";

const HeaderMainBody = ({
  sortMoviesAsc,
  sortMoviesDesc,
  sortMoviesByDate,
  sortMoviesByRate,
  movies,
}) => {
  const [active, setActive] = useState({ flag: true });
  const [sort, setSort] = useState({ direction: false });
  const handleClick = (event) => {
    event.preventDefault();
    setActive((prevState) => ({ flag: !prevState.flag }));
    active.flag ? sortMoviesByDate() : sortMoviesByRate();
  };
  const handleSort = (event) => {
    event.preventDefault();
    setSort((prevState) => ({ direction: !prevState.direction }));
    sort.direction ? sortMoviesAsc() : sortMoviesDesc();
  };

  return (
    <div className=" movies__header-body ">
      <p>{movies.current.length} movies found</p>
      <div className="movies__sort-block">
        Sort by
        <div className="movies__sort-direction-block">
          <a
            className={classNames("up", {
              __direction: sort.direction,
            })}
            onClick={handleSort}
          />
          <a
            className={classNames("down", {
              __direction: !sort.direction,
            })}
            onClick={handleSort}
          />
        </div>
        <a
          id="sort"
          href="#"
          className={classNames("movies__sort", {
            active__sort: !active.flag,
          })}
          onClick={handleClick}
        >
          release date
        </a>
        <a
          id="sort"
          href="#"
          className={classNames("movies__sort", {
            active__sort: active.flag,
          })}
          onClick={handleClick}
        >
          rating
        </a>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  sortMoviesAsc,
  sortMoviesDesc,
  sortMoviesByDate,
  sortMoviesByRate,
};
const mapStateToProps = (state) => ({
  movies: state.movies,
});
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  HeaderMainBody
);
