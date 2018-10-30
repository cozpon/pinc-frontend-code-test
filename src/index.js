import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import reducers from './reducers';
import thunk from 'redux-thunk';
import './index.css';


import App from './containers/App';

//---------SERVICEWORKERS-------------------
import registerServiceWorker from './lib/registerServiceWorker';

// ------STORE--------------------------
const store = createStore(
  reducers,
  applyMiddleware(thunk)
);


ReactDOM.render(
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
