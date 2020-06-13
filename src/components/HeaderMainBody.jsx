import React, { useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { sortMoviesAsc, sortMoviesDesc } from "../actions";
import classNames from "classnames";

import "../styles/components/HeaderMainBody.css";

const HeaderMainBody = ({ sortMoviesAsc, sortMoviesDesc, movies }) => {
  const [active, setActive] = useState({ flag: false });
  const handleClick = (event) => {
    event.preventDefault();
    setActive((prevState) => ({ flag: !prevState.flag }));
    active.flag ? sortMoviesAsc() : sortMoviesDesc();
  };
  console.log(active.flag);
  return (
    <div className="products__header container">
      <h3>{movies.current.length}</h3>
      <div>
        Sort by
        <a
          id="sort"
          href="#"
          className={classNames("products__sort", {
            ["active"]: active.flag,
          })}
          onClick={handleClick}
        >
          release date
        </a>
        <a
          id="sort"
          href="#"
          className={classNames("products__sort", {
            ["active"]: !active.flag,
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
};
const mapStateToProps = (state) => ({
  movies: state.movies,
});
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  HeaderMainBody
);
