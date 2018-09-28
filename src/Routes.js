import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';


import { Home, About } from './pages';
// import { Home, About, Contact } from './pages';
// import ContactRoutes from './pages/contacts';
import Contact from './pages/contacts/contact/Contact';

// import ContactSub from './pages/contacts/contact-sub/ContactSub';
// import './pages/contacts'

const AppRoutes = () =>
    // <Switch>
    // <Router>
      <section className="app__container">
        <Switch>
        {/* <Router> */}
          
        
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          {<Route exact path="/contact" component={Contact} />}
          {/* <Route exact path="/contact" component={ContactRoutes} /> */}
          {/* <Route exact path="/contact" render={() => ContactRoutes} /> */}
            {/* <Route path="/contact/sub" component={ContactSub} /> */}

        {/* </Router> */}
        </Switch>
      </section>
    // </Router>

    // </Switch>

export default AppRoutes;
