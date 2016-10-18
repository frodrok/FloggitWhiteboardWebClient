import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { add, getAll } from '../actions';
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
  return (< div >
    <WhiteboardHeader onAddPostIt={props.handleAdd} />
    <div className="post-its-container">
      <ul className="list-group">
        {props.postits.map(item => (<
            PostIt key={item.id}
          id={item.id}
          data={item.postIt}
        />)) }
        </ul>
    < /div >
  </div>);
};


const mapStateToProps = state => ({
  postits: state.postits
});

const mapDispatchToProps = dispatch => ({
  handleAdd: (postit) => {
    dispatch(add(postit));
    dispatch(getAll());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Whiteboard);
