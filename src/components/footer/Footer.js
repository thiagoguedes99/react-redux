import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Footer.css';

class Footer extends Component {
  render() {
    const {copyright = '&copy; 2000'} = this.props

    return (
      <footer className="footer__container">
        {/* <h4>{this.props.copyright}</h4> */}
        <h4 dangerouslySetInnerHTML={{__html: copyright}}></h4>
      </footer>
    );
  }
}

Footer.propTypes = {
  copyright: PropTypes.string
};

export default Footer;
