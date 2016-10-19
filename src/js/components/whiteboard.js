import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { add, getAll, remove, setBeingDeleted, showDelete, showEdit, setBeingEdited, update } from '../actions';
import PostIt from './postit';
import WhiteboardHeader from './whiteboardHeader';
import EditDialogue from './editDialogue';
import ConfirmDeletePostIt from './confirmDeleteDialog';

const confirmDialogStyles = {
  content: {
    top: '40%',
    left: '20%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const editDialogStyles = {
  content: {
    position: 'fixed',
    display: 'flex',
    flexWrap: 'wrap',
    width: '50%'
  }
};

const Whiteboard = (props) => {
  console.log(props.postits);
  return (
    < div >
      <WhiteboardHeader onAddPostIt={props.handleAdd} />
      <div className="post-its-container">
        <ul className="list-group">
          {props.postits.map(item => (<
          PostIt key={item.id}
            id={item.id}
            data={item.postIt}
            confirmIsVisible={props.confirmIsVisible}
            onDelete={props.handleDeleteClick}
            onEdit={props.handleEdit}
          />)) }
        </ul>
      < /div >

      <Modal isOpen={props.confirmIsVisible} style={confirmDialogStyles}>
        <ConfirmDeletePostIt
          isVisible={props.confirmIsVisible}
          id={props.beingDeleted}
          onDelete={props.handleDeletePostIt}
        />
      </Modal>

      <Modal isOpen={props.showEdit} style={editDialogStyles}>
        <EditDialogue
          isVisible={props.showEdit}
          data={props.editing}
          onUpdatePostIt={props.handleUpdatePostIt}
          onUpdate={props.handleUpdateClick}
        />
</Modal>
    </div>
);
};

const mapStateToProps = state => ({
  postits: state.postits,
  confirmIsVisible: state.ui.confirmIsVisible,
  beingDeleted: state.ui.beingDeleted,
  showEdit: state.edit.showEdit,
  editing: state.edit.editing
});

const mapDispatchToProps = dispatch => ({
  handleAdd: (postit) => {
    dispatch(add(postit));
    // dispatch(getAll());
  },
  handleDeleteClick: (id) => {
    dispatch(setBeingDeleted(id));
    dispatch(showDelete(true));
  },
  handleDeletePostIt: (id) => {
    if (!id) {
      dispatch(setBeingDeleted(0));
      dispatch(showDelete(false));
    }
    dispatch(remove(id));
    dispatch(setBeingDeleted(0));
    dispatch(showDelete(false));
    // dispatch(getAll());
  },
  handleEdit: (postit) => {
    dispatch(showEdit(true));
    dispatch(setBeingEdited(postit));
  },
  handleUpdatePostIt: (id, postTitle, postText, postColor, postNotes, timeCreated) => {
    console.log(postColor);
    let notes = [];
    if (postNotes !== undefined) {
      notes = postNotes;
    }
    const postIt = {
      title: postTitle,
      text: postText,
      timeCreated,
      color: postColor,
      notes
    };
    dispatch(update(id, postIt));
    dispatch(showEdit(false));
    dispatch(setBeingDeleted({}));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Whiteboard);
