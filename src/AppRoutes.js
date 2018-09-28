import React from 'react';
import { Route } from "react-router-dom";

import { Home, About } from './pages';

import Contact from './pages/contacts-model';


const AppRoutes = () => (
  <section className="app__container">
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route path="/contact" component={Contact} />
  </section>

  );

export default AppRoutes;
