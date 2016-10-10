import React from 'react';

const PostIt = props => (
  <div className="panel-body" style={{ backgroundColor: props.data.color }}>
    <h6>{props.data.timeCreated}</h6>
    <p className="title" style={{ textDecoration: 'underline' }}>{ props.data.title }</p>
    <p className="title">{ props.data.text }</p>
    <ul className="extra-info-list">
      <li>Note 1</li>
      <li>Note 2</li>
    </ul>
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
