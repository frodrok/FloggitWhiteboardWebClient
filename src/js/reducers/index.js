import { combineReducers } from 'redux';

import postits from './postit';
import ui from './ui';
import edit from './edit';

const reducer = combineReducers({
  postits, ui, edit
});

export default reducer;
