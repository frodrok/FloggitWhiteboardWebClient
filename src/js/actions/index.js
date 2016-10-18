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

const internalError = errorText => ({
  type: types.ERROR,
  data: errorText
});


export const add = postit => (dispatch) => {
  axios.post('http://localhost:8080/api/v1/postits', postit)
        .then((response) => {
          dispatch(internalAddPostIt(postit));
        }).catch((error) => {
          dispatch(internalError('Could not add postit'));
        });
};

export const remove = id => (dispatch) => {
  return axios.delete(`http://localhost:8080/api/v1/postits/${id}`)
        .then((response) => {
          dispatch(internalRemove(id));
        }).catch((error) => {
          dispatch(internalError('Could not remove postit'));
        });
};
