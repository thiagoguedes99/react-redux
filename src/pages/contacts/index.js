// import Contact from './contact/Contact'
// // import ContactSub from './contact-sub/ContactSub'



// export {
//   Contact,
//   // ContactSub
// };


import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';


// import { Contact, ContactSub } from './index';
import Contact from './contact/Contact';

const ContactRoutes = () =>
    // <Switch>
    // <Router>
        <Route exact path="/contact" component={Contact} />
    // </Router>
    // </Switch>

export default ContactRoutes;
