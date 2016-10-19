import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { getAll, startSocket } from '../actions';

import reducer from '../reducers';

const logger = createLogger();
const store = createStore(reducer, applyMiddleware(thunk, logger));
// store.dispatch(getAll());
store.dispatch(startSocket());
export default store;
