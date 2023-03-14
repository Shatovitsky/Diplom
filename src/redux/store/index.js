import createSagaMiddleware from '@redux-saga/core';
import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';
import userWatcher from '../sagas/userSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), composeWithDevTools()),
);
sagaMiddleware.run(userWatcher);
export default store;
