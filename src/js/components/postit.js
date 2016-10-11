import React from 'react';
import Modal from 'react-modal';


const PostIt = (props) => {
  function confirmDelete() {
    if (window.confirm('Do you really want to delete this post-it?')) {
      console.log('Confirm delete');
    }
  }
  return (
    <div className="panel-body" style={{ backgroundColor: props.data.color }}>
      <h6>{props.data.timeCreated}</h6>
      <p className="title" style={{ textDecoration: 'underline' }}>{ props.data.title }</p>
      <p className="title">{ props.data.text }</p>
      <div className="col-lg-10 col-lg-offset-2">
        <button className="edit-button btn btn-default btn-xs">Edit</button>
        <button className="delete-button btn btn-danger btn-xs" onClick={confirmDelete}>Delete</button>
      </div>
    </div>
);
};

PostIt.propTypes = () => ({
  data: React.PropTypes.shape.isRequired
});


export default PostIt;
