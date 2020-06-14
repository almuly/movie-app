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
import Loader from "../components/Loader";

const App = ({load}) => {

  return (
    <>
        <Loader display={load} />
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
export default compose(connect(mapStateToProps, mapDispatchToProps), memo)(App);
