import { combineReducers } from 'redux';

import postits from './postit';
import ui from './ui';

const reducer = combineReducers({
  postits, ui
});

export default reducer;
