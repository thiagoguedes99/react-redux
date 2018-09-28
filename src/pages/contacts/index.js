import React from 'react';
import { Route, Link } from "react-router-dom";

import Contact from './contact/Contact';

const ContactRoutes = () =>(
  <article>
    <Route path="/contact" component={Contact} />
  </article>
)

export default ContactRoutes;
