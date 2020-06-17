import React from "react";
import { Route, Switch } from "react-router-dom";

import MovieCatalog from "./MovieCatalog";
import NotFoundPage from "../components/NotFoundPage";

const MainBody = () => (
  <main className=" container">
    <Switch>
      <Route exact path="/film/:id" component={MovieCatalog} />
      <Route exact path="/" component={MovieCatalog} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </main>
);
export default MainBody;
