import React from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Main from "../components/Main";
import Done from "../components/Done";
import NotDone from "../components/Notdone";
import NotFound from "../components/NotFound";
import Store from "../redux/store";

const App = () => (
  <div>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/done" component={Done} />
        <Route path="/not-done" component={NotDone} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  </div>
);

export default App;
