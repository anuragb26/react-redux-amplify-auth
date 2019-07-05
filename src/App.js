import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Profile from "./containers/Profile/Profile";

import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/login" component={Login} exact={true} />
      <Route path="/profile" component={Profile} exact={true} />
    </Switch>
  );
}

export default App;
