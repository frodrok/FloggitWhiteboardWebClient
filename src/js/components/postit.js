import React from 'react';

const PostIt = props => (
  <div className="panel-body" style={{ backgroundColor: props.data.color }}>

    <p className="title" style={{ textDecoration: 'underline' }}>{ props.data.title }</p>
    <p className="title">{ props.data.text }</p>
    <div className="col-lg-10 col-lg-offset-2">
      <button className="edit-button btn btn-default btn-xs">Edit</button>
      <button className="delete-button btn btn-danger btn-xs">Delete</button>
    </div>
  </div>
);

PostIt.propTypes = () => ({
  data: React.PropTypes.shape.isRequired
});


export default PostIt;
