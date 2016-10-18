import * as types from '../constants/action_types';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_POSTIT:
      {
        console.log(action.data);
        const postit = Object.assign({}, action.data);
        return [...state, postit];
      }

    case types.REMOVE_POSTIT:
      {
        const id = action.data;
        return state.filter(postit => postit.id !== id);
      }

    case types.UPDATE_POSTIT:
      {
        return [...action.data];
      }

    default:
      {
        return state;
      }
  }
};

export default reducer;
