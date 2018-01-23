import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';

import routes from './routes';
import reducers from './reducers';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/main.styl';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(
  reducers,
  applyMiddleware(logger)
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>{routes}</Router>
  </Provider>
  , document.querySelector('#app'));
