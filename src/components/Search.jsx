import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { movieTitle, movieGenre } from "../constants/API";
import { searchMovies, addMovies } from "../actions";
import "../styles/components/Search.css";
import classNames from "classnames";

const Search = ({addMovies }) => {
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

  // const handleSearchTitle = (event) => {
  //   event.preventDefault();
  //   setQuery(value);
  // };

  useEffect(() => {
    setTimeout(() => {
      if (query!=='') {
        fetch(
            click.title
                ? movieTitle(query, click.limit)
                : movieGenre(query, click.limit)
        )
            .then((response) => response.json())

            .then((movies) => {
              addMovies(movies.data);
              console.log(movies.data);
            })
            .catch((err) => {
          console.log(err);
        });
      }
    }, 3000);
  }, [query, click.limit]);

  return (
    <form onSubmit={handleSearch}>
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
          <p className="header_p">Search by</p>
          <a
            href="#"
            onClick={handleClickTitle}
            className={classNames("header__button", {
              ["active"]: click.title,
            })}
          >
            TITLE
          </a>
          <a
            href="#"
            onClick={handleClickGenre}
            className={classNames("header__button", {
              ["active"]: !click.title,
            })}
          >
            GENRE
          </a>
        </div>
        <button className="header__button" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};
const mapStateToProps = (state) => ({
  movies: state.movies.current,
});
const mapDispatchToProps = {
  searchMovies,
  addMovies,
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(Search);
