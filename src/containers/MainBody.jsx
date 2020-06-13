import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import Card from "../containers/Card";
import MovieCatalog from "./MovieCatalog";

// import "../styles/components/MainBody.css";

const MainBody = () => (
    <main className="products container">
        <Switch>
            <Route path="/film/:id" component={MovieCatalog} />
            <Route path="/" component={MovieCatalog} />
        </Switch>
    </main>
);
export default MainBody;
