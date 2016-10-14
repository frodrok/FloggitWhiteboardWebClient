import React from 'react';

const PostIt = (props) => {
  function showEditDialogue() {
    props.onEdit(props.id);
  }

  function showConfirmDialogue() {
    console.log(props.id);
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
  confirmIsVisible: React.PropTypes.bool,
  onDelete: React.PropTypes.func
});


export default PostIt;
