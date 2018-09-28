import React, { Component } from 'react';

import { Header, Footer } from './components';
import AppRoutes from './AppRoutes';
import menu from './assets/js/menu';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header title='Meu Título' itens={menu} />        
        <AppRoutes />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
