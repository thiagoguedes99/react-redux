import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Header.css';

class Header extends Component {
    render() {
      const {itens} = this.props
      
      return (
        <header className="header__container">
          <h2>{this.props.title}</h2>

          <ul className="header__menu">
            {itens && itens.map((item, index) =>
              <li key={index}><Link to={item.url}>{item.title}</Link></li>
            )}
          </ul>
        </header>
      );
    }
  }

  Header.propTypes = {
  title: PropTypes.string.isRequired,
  itens: PropTypes.array.isRequired
};

export default Header;
  