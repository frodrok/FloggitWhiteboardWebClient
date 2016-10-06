import React from 'react';
import ReactDOM from 'react-dom';
import AddPostItForm from './addPostItForm';
import EditDialogue from './editDialogue';

// const item = {
//   title: 'diska',
//   text: 'fixa disken',
//   timeCreated: '2016-10-05 11:10',
//   color: 'blue'
// };

function showEditDialogue() {
  console.log('hej');
}

const PostIt = props => (
  <div className="panel-body" style={{ backgroundColor: props.data.color }}>

    <p className="title" style={{ textDecoration: 'underline' }}>{ props.data.title }</p>
    <p className="title">{ props.data.text }</p>
    <div className="col-lg-10 col-lg-offset-2">
      <button className="edit-button btn btn-default btn-xs" onClick={showEditDialogue}>Edit</button>
      <button className="delete-button btn btn-danger btn-xs">Delete</button>
    </div>
  </div>
);

PostIt.propTypes = () => ({
  data: React.PropTypes.shape.isRequired
});


export default PostIt;
