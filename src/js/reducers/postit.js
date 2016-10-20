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

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case types.ADD_POSTIT:
//       {
//         const postit = Object.assign({}, action.data);
//         return Object.assign({}, state, { postits: [...postit] });
//       }
//
//     case types.REMOVE_POSTIT:
//       {
//         const id = action.data;
//         return Object.assign({}, state, { postits: state.postits.filter(item => item.id !== id) });
//       }
//
//     case types.UPDATE_POSTIT:
//       {
//         return Object.assign({}, state, { postits: [...action.data] });
//       }
//     case types.SET_BEING_EDITED: {
//       const postit = Object.assign({}, state.postits.filter(item => item.id === action.data)[0]);
//       return Object.assign({}, state, { editing: postit });
//     }
//
//     default:
//       {
//         return state;
//       }
//   }
// };

export default reducer;
