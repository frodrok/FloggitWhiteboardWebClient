import React from 'react';
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '40%',
    left: '20%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const ConfirmDeletePostIt = (props) => {
  if (props.isVisible) {
    return (
      <div className="confirm">
        <div>
          <p>Do you really want to delete this post-it?</p>
        </div>
        <div className="col-lg-10 col-lg-offset-2">
          <button className="btn btn-default">Cancel</button>
          <button className="btn btn-primary">OK</button>
        </div>
      </div>
    );
  }
  return null;
};

ConfirmDeletePostIt.propTypes = () => ({
  isVisible: React.PropTypes.bool
});

const PostIt = (props) => {
  function showEditDialogue() {
    props.onEdit(props.id);
  }
  function showConfirmDialogue() {
    props.onDelete(props.id);
  }

  return (
    <li>
      <div className="panel-body" style={{ backgroundColor: props.data.color }}>
        <h6>{props.data.timeCreated}</h6>
        <p className="title" style={{ textDecoration: 'underline' }}>{ props.data.title }</p>
        <p className="title">{ props.data.text }</p>
        <div className="col-lg-10 col-lg-offset-2">
          <button className="edit-button btn btn-default btn-xs" onClick={showEditDialogue}>Edit</button>
          <button className="delete-button btn btn-danger btn-xs" onClick={showConfirmDialogue}>Delete</button>
        </div>
      </div>
    </li>
  );
};

PostIt.propTypes = () => ({
  id: React.PropTypes.number,
  data: React.PropTypes.shape.isRequired,
  onEdit: React.PropTypes.func,
  // confirmIsVisible: React.PropTypes.bool,
  onDelete: React.PropTypes.func
});


export default PostIt;
