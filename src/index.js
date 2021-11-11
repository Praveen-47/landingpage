import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Landing from "views/Landing.js";
import Navbar from "components/Navbar";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/landing' component={Landing} />
      <Redirect from='/' to='/landing' />
      {/* <Navbar transparent/> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
