import React from 'react';
import { Route, Link } from "react-router-dom";

import ContactPersonal from '../contact-personal/ContactPersonal';
import ContactWork from '../contact-work/ContactWork';

import './Contact.css';

const Contact = () => (
    <article>
      <Link to="/contact/personal">Pessoal</Link>
      <br/>
      <Link to="/contact/work">Trabalho</Link>

      <Route exact path="/contact/personal" component={ContactPersonal} />
      <Route exact path="/contact/work" component={ContactWork} />
    </article>
)

export default Contact;
