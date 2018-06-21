import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import './index.css';
import reducer from './reducers'
import EventIndex from './components/event-index';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk'

//あああああいうえお

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <EventIndex />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
