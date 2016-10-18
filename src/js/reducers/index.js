import {
    combineReducers
} from 'redux';

import postits from './postit';

const reducer = combineReducers({
  postits
});

export default reducer;
