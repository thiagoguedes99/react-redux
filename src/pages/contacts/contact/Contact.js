import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { Link, NavLink } from 'react-router-dom';


// import { ContactSub } from './../index';
import ContactSub from '../contact-sub/ContactSub';

import './Contact.css';

class Contact extends Component {
    render() {

      const { match } = this.props;
      
      return (
        <article>
          foi aqui Contact
          {/* <p> */}
          {/* <Link to={`${match.url}/sub`}>SUB</Link> */}
          <NavLink to="/contact/sub">SUB</NavLink>
          {/* </p> */}
          <hr />
          {/* <p>url</p>
          {this.props.match.url}
          <p>path</p>
          {this.props.match.path} */}
          {/* <Switch> */}
            <Route exact path="/contact/sub" component={ContactSub} />
            {/* <Route path={`${match.url}/sub`} render={() => ContactSub} /> */}
            {/* <Route exact path={match.url} render={() => <h3>Please select a topic.</h3>} */}
            <Route exact path={`/contact`} render={() => <h3>Please select a topic.</h3>} />
            {/* <Route exact path={`/contact`} component={ContactSub} /> */}
          {/* </Switch> */}
        </article>
      );
    }
  }

export default Contact;
