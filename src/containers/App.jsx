import React, { memo, useEffect } from "react";
import { bool, func } from "prop-types";

/* import { hot } from "react-hot-loader"; */
import { connect } from "react-redux";
import { compose } from "redux";

import Header from "./Header.jsx";
import MainBody from "./MainBody";
import HeaderMainBody from "../components/HeaderMainBody";

import "../styles/containers/App.css";
import { startLoader, endLoader, addMovies } from "../actions";

const App = ({ addMovies }) => {

  return (
    <>
      <Header />
      <HeaderMainBody/>
      <MainBody/>
    </>
  );
};

const mapStateToProps = (state) => ({
  load: state.load,
});
const mapDispatchToProps = {
  startLoader,
  endLoader,
  addMovies,
};

// App.propTypes = {
//   load: bool.isRequired,
//   startLoader: func.isRequired,
//   endLoader: func.isRequired,
//   addMovies: func.isRequired,
// };
export default compose(connect(mapStateToProps, mapDispatchToProps), memo)(App);
