import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger({ collapsed: true });

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
  );

  return store;
}
