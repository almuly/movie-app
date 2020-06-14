import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import classNames from "classnames";
import { bool, func } from "prop-types";
import Loader from "./Loader";
import { movieTitle, movieGenre } from "../constants/API";

import { startLoader, endLoader, searchMovies, addMovies } from "../actions";

import "../styles/components/Search.css";

const Search = ({ load, addMovies, startLoader, endLoader }) => {
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");
  const [click, setClick] = useState({ title: true, limit: 0 });

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    setQuery(value);
  };
  const handleClickGenre = (event) => {
    event.preventDefault();

    setClick({ title: false, limit: 25 });
  };

  const handleClickTitle = (event) => {
    event.preventDefault();

    setClick({ title: true, limit: 25 });
  };

  useEffect(() => {
    setTimeout(() => {
             if (query !== "") {
          fetch(
          click.title
            ? movieTitle(query, click.limit)
            : movieGenre(query, click.limit)
        )
          .then((response) => response.json())

            .then((movies) => {

            addMovies(movies.data);
            console.log(movies.data);
              endLoader();
          })

          .catch((err) => {
            console.log(err);
            endLoader();
          });
      }
    }, 3000);
  }, [query, click.limit]);

  return (
    <div>

      <form onSubmit={handleSearch} >
        <p className="search__title">Find your movie</p>
        <input
          id="search"
          className="header__search"
          type="text"
          onChange={handleInput}
          placeholder="Search"
        />
        <div className="search__bottom">
          <div className="search__bottom-type">
            <p className="search__p">Search by</p>
            <a
              href="#"
              onClick={handleClickTitle}
              className={classNames("a__search", {
                ["active"]: click.title,
              })}
            >
              title
            </a>
            <a
              href="#"
              onClick={handleClickGenre}
              className={classNames("a__search", {
                ["active"]: !click.title,
              })}
            >
              genre
            </a>
          </div>
          <button className="search__button" type="submit" onClick={startLoader}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  movies: state.movies.current,
  load: state.load,
});
const mapDispatchToProps = {
  startLoader,
  endLoader,
  searchMovies,
  addMovies,
};
Search.propTypes = {
  load: bool.isRequired,
  startLoader: func.isRequired,
  endLoader: func.isRequired,
  addMovies: func.isRequired,
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(Search);
