import React from 'react';

import logo from './../../assets/img/logo.svg';

export const buttonLoading = Component => 
  props => props.isLoading ?
  <img alt="logo" className="App-logo" src={logo} />
  :
  <Component {...props} />