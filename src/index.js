import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Store } from './store';


import App from './App';

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();

{/* <Provider store={store}>
  <Router>
    <AppRoutes />
  </Router>
</Provider> */}


// react-loadable
