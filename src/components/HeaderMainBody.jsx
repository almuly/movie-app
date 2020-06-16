import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import {
  sortMoviesAsc,
  sortMoviesDesc,
  sortMoviesByDate,
  sortMoviesByRate,
} from '../actions';

import '../styles/components/HeaderMainBody.css';

const HeaderMainBody = ({
  sortMoviesAsc,
  sortMoviesDesc,
  sortMoviesByDate,
  sortMoviesByRate,
  movies,
}) => {
  const [active, setActive] = useState({ flag: false });
  const [sort, setSort] = useState({ direction: true });
  const handleClick = (event) => {
    event.preventDefault();
    setActive((prevState) => ({ flag: !prevState.flag }));
    active.flag ? sortMoviesByDate() : sortMoviesByRate();
  };
  const handleSortAsc = (event) => {
    event.preventDefault();
    // debugger;
    sortMoviesAsc();
  };
  const handleSortDesc = (event) => {
    event.preventDefault();

    sortMoviesDesc();
  };

  console.log(sortMoviesDesc);
  console.log(sortMoviesAsc);
  return (
    <div className=" movies__header-body ">
      <p>
        {movies.current.length}
        {' '}
        movies found
      </p>
      <div className="movies__sort-block">
        Sort by

        <i className=" up" onClick={handleSortAsc} />
        <i className="down" onClick={handleSortDesc}> </i>
        <a
          id="sort"
          href="#"
          className={classNames('movies__sort', {
            active__sort: active.flag,
          })}
          onClick={handleClick}
        >
          release date
        </a>
        <a
          id="sort"
          href="#"
          className={classNames('movies__sort', {
            active__sort: !active.flag,
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
  HeaderMainBody,
);
