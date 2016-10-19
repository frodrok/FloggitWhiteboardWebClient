import { SET_BEING_EDITED, SHOW_EDIT_DIALOG } from '../constants/action_types';

const initialState = {
  showEdit: false, editing: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BEING_EDITED: {
      return Object.assign({}, state, { editing: action.data });
    }

    case SHOW_EDIT_DIALOG: {
      return Object.assign({}, state, { showEdit: action.data });
    }
    default: {
      return state;
    }
  }
};

export default reducer;
