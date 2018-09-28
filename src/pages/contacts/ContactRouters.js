import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';


import { Contact, ContactSub } from './index';

const AppRoutes = () =>
    // <Switch>
    // <Router>
      <section className="app__container">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        {<Route exact path="/contact" component={Contact} />}
        {/* <Route exact path="/contact" component={ContactSub} /> */}
      </section>
    // </Router>

    // </Switch>

export default AppRoutes;
