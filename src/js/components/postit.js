import React from 'react';

const PostIt = (props) => {
  function showEditDialogue() {
    props.onEdit(props.id);
  }
  return (
    <div className="panel-body" style={{ backgroundColor: props.data.color }}>
      <h6>{props.data.timeCreated}</h6>
      <p className="title" style={{ textDecoration: 'underline' }}>{ props.data.title }</p>
      <p className="title">{ props.data.text }</p>
      <div className="col-lg-10 col-lg-offset-2">
        <button className="edit-button btn btn-default btn-xs" onClick={showEditDialogue}>Edit</button>
        <button className="delete-button btn btn-danger btn-xs">Delete</button>
      </div>
    </div>
);
};

PostIt.propTypes = () => ({
  id: React.PropTypes.number,
  data: React.PropTypes.shape.isRequired,
  onEdit: React.PropTypes.func
});


export default PostIt;
