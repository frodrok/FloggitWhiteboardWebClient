import axios from 'axios';
import socketIOclient from 'socket.io-client';
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
                console.log('getAll', response.data);
                dispatch(internalUpdate(response.data));
              });
};

export const add = postit => (dispatch) => {
  axios.post('http://localhost:8080/api/v1/postits', postit)
        .then((response) => {
          // const newPostit = {
          //   id: response.data.id,
          //   postIt: postit
          // };
          // dispatch(internalAddPostIt(newPostit));
          // dispatch(getAll());
        }).catch((error) => {
          dispatch(internalError('Could not add postit'));
        });
};

export const remove = id => (dispatch) => {
  axios.delete(`http://localhost:8080/api/v1/postits/${id}`)
        .then((response) => {
          // dispatch(internalRemove(id));
        }).catch((error) => {
          dispatch(internalError('Could not remove postit'));
        });
};

export const startSocket = () => (dispatch) => {
  console.log('SOCKET STARTED');
  const socket = socketIOclient('http://localhost:8080');

  socket.on('postit-update', (data) => {
    console.log('update', data);
    const postits = data;
    dispatch(internalUpdate(postits));
  });
};

export const update = (id, postit) => (dispatch) => {
  axios.put(`http://localhost:8080/api/v1/postits/${id}`, postit)
        .then((response) => {
          // dispatch(getAll());
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

export const showEdit = show => ({
  type: types.SHOW_EDIT_DIALOG,
  data: show
});

export const setBeingEdited = id => ({
  type: types.SET_BEING_EDITED,
  data: id
});
