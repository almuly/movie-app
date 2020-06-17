import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router";

import Card from "./Card";
import ModalCard from "../components/ModalCard";
import Modal from "../components/Modal";

import "../styles/containers/MovieCatalog.css";

const MovieCatalog = ({ movies }) => {
  const initialState = { openModal: false, movie: {} };
  const [state, setState] = useState({ ...initialState });
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    const { id } = params || {};
    if (id) {
      const movie = movies.find((item) => +id === item.id);

      if (movie) {
        setState({ openModal: true, movie });
      } else {
        history.push("/");
      }
    }
  }, [params]);

  const closeModal = () => {
    setState({ ...initialState });
    history.push("/");
  };
  console.log(state);
  return (
    <div className="container catalog">
      {movies.length ? (
        movies.map((movie) => <Card key={movie.id} movie={movie} />)
      ) : (
        <div className="sign">
          <h1>I can help you find movies</h1>
        </div>
      )}
      <Modal display={state.openModal} onClose={closeModal}>
        <ModalCard movie={state.movie} />
      </Modal>
    </div>
  );
};

MovieCatalog.displayName = "MovieCatalog";

const mapStateToProps = (state) => ({
  movies: state.movies.current,
});

export default connect(mapStateToProps)(MovieCatalog);
