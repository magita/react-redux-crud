import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import './index.css';
import reducer from './reducers'
import EventIndex from './components/event-index';
import EventNew from './components/event-new'
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

//あああああいうえお

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Switch>
      <Route exact path="/event/new" component={EventNew} />
      <Route exact path="/" component={EventIndex} />
    </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
