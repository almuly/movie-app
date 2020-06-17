import React from 'react';
import ReactDOM from 'react-dom';

import 'styles/index.css';

import App from 'containers/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';

ReactDOM.render(
  <>
    <Provider store={store}>
      <BrowserRouter>

        <App />
      </BrowserRouter>
    </Provider>
  </>,
  document.getElementById('root'),
);
