import axios from 'axios';
import * as types from '../constants/action_types';

const internalAddPostIt = postit => ({
  type: types.ADD_POSTIT,
  data: postit
});

const internalRemove = id => ({
  type: types.REMOVE_POSTIT,
  data: id
});

const internalUpdate = postits => ({
  type: types.UPDATE_POSTIT,
  data: postits
});

const internalError = errorText => ({
  type: types.ERROR,
  data: errorText
});
export const getAll = () => (dispatch) => {
  axios.get('http://localhost:8080/api/v1/postits')
              .then((response) => {
                dispatch(internalUpdate(response.data));
              });
};

export const add = postit => (dispatch) => {
  axios.post('http://localhost:8080/api/v1/postits', postit)
        .then((response) => {
          const newPostit = {
            id: response.data.id,
            postIt: postit
          };
          dispatch(internalAddPostIt(newPostit));
        }).catch((error) => {
          dispatch(internalError('Could not add postit'));
        });
};

export const remove = id => (dispatch) => {
  axios.delete(`http://localhost:8080/api/v1/postits/${id}`)
        .then((response) => {
          dispatch(internalRemove(id));
        }).catch((error) => {
          dispatch(internalError('Could not remove postit'));
        });
};

export const showDelete = show => ({
  type: types.SHOW_CONFIRM_DELETE_DIALOG,
  data: show
});

export const setBeingDeleted = id => ({
  type: types.SET_BEING_DELETED,
  data: id
});
