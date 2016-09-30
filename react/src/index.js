// imports
import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReduxToastr from 'react-redux-toastr';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import createSagaMiddleware from 'redux-saga';
import { AppContainer } from 'react-hot-loader';
// TODO import rootSaga from './sagas/indexSaga.js';

// styles
// here is the main style, in this file you should include global styles for react app
// this is ordinary scss file and it does NOT use css modules 
require('./styles/main.scss');

// requirements for animation
// maybe we can delete this :)
// require('velocity-animate');
// require('velocity-animate/velocity.ui');


// injects tap event plugin (for mobile phones)
injectTapEventPlugin();

// creates sagas middleware
const sagaMiddleware = createSagaMiddleware();

// includes reducers
import reducers from './reducers/reducersIndex';

// configures the store
const initialState = {};
const store = createStore(reducers, initialState, compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Runs sagas
// TODO start this
// sagaMiddleware.run(rootSaga);

// retrieves starting nodes for React
const navigationStartingNode = document.getElementById('navigation-node');
const contentStartingNode = document.getElementById('content-node');

// general render function
function generalRender(EntryComponent, startingNode) {
  // renders
  // IT'S IMPORTANT TO HAVE AppContainer AS THE FIRST COMPONENT
  // INSIDE IF WE HAVE PROVIDER FOR REDUX STORE
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <EntryComponent />
      </Provider>
    </AppContainer>,
  startingNode);
}

// render function for navigation
function renderNavigation() {
  // defines entry component
  const NavigationContainer = require('./components/NavigationContainer/NavigationContainer').default;
  
  // renders
  generalRender(NavigationContainer, navigationStartingNode);
}

// render function for content
function renderContent() {
  // defines entry component
  const ContentContainer = require('./components/ContentContainer/ContentContainer').default;

  // renders
  generalRender(ContentContainer, contentStartingNode);
}

// renders
renderNavigation();
renderContent();

// checks if there is hot module replacement
if (module.hot) {
  // registers hot module replacement for every entry component that we want to watch
  // IMPORTANT!!! ROUTES FOR ACCEPT AND RENDER FUNCTIONS AND  MUST BE EXPLICITLY DEFIEND AS STRING.
  // YOU CANNOT PUT PATH TO COMPONENT IN CONST OR VAR AND PASS IT TO FUNCTION. Dont ask why :(
  module.hot.accept('./components/NavigationContainer/NavigationContainer', renderNavigation);
  module.hot.accept('./components/ContentContainer/ContentContainer', renderContent);
}