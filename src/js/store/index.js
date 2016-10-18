import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { getAll } from '../actions';

import reducer from '../reducers';

const store = createStore(reducer, applyMiddleware(thunk));
store.dispatch(getAll());
export default store;
