import React from 'react';

const ConfirmDeletePostIt = (props) => {
  if (props.isVisible) {
    return (
      <div className="modal-component" >
        <p>Do you really want to delete this post-it?</p>
        <button className="btn btn-primary">OK</button>
        <button className="btn btn-default">Cancel</button>
      </div>);
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
    props.onDelete();
  }
  return (
    <div className="panel-body" style={{ backgroundColor: props.data.color }}>
      <h6>{props.data.timeCreated}</h6>
      <p className="title" style={{ textDecoration: 'underline' }}>{ props.data.title }</p>
      <p className="title">{ props.data.text }</p>
      <div className="col-lg-10 col-lg-offset-2">
        <button className="edit-button btn btn-default btn-xs" onClick={showEditDialogue}>Edit</button>
        <button className="delete-button btn btn-danger btn-xs" onClick={showConfirmDialogue}>Delete</button>
      </div>
      < ConfirmDeletePostIt isVisible={props.confirmIsVisible} />
    </div>
);
};


PostIt.propTypes = () => ({
  id: React.PropTypes.number,
  data: React.PropTypes.shape.isRequired,
  onEdit: React.PropTypes.func,
  confirmIsVisible: React.PropTypes.bool,
  onDelete: React.PropTypes.func
});


export default PostIt;
