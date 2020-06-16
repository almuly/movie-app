import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MovieCatalog from './MovieCatalog';

const MainBody = () => (
  <main className=" container">
    <Switch>
      <Route path="/film/:id" component={MovieCatalog} />
      <Route path="/" component={MovieCatalog} />
    </Switch>
  </main>
);
export default MainBody;
