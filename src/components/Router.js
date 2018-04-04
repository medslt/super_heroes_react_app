import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


// Import Components
import App from './App';
import HeroDetails from './HeroDetails';
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/hero/:heroId" component={HeroDetails} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
