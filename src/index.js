import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import reducers from './reducers';
import thunk from 'redux-thunk';
import './index.css';
import registerServiceWorker from './lib/registerServiceWorker';

import App from './containers/App';

// This allows me to pass in 3 arguments into the createStore function
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// to allow use of Redux Dev Tools



const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk))
);

// Using React-Router-Dom for app expansion, to allow routing between (future) containers
ReactDOM.hydrate(
  <Provider store={store}>
    <Router>
      <div id="source">
        <Route exact path="/" component={App} />
      </div>
    </Router>
  </Provider>,
document.getElementById('root')
);

registerServiceWorker();