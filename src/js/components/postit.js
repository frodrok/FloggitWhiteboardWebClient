import React from 'react';

export default class PostIt extends React.Component {

  render() {
    console.log(this);

    return (
      <div className="panel-body" style={{ backgroundColor: this.props.data.postIt.color }}>
        <ul className="label-color-list">
          <li className="label-color" />
          <li className="label-color" />
        </ul>
        <p className="title" style={{ textDecoration: 'underline' }}>{this.props.data.postIt.title}</p>
        <p className="title">{this.props.data.postIt.text}</p>
        <div className="col-lg-10 col-lg-offset-2">
          <button className="edit-button btn btn-default btn-xs">Edit</button>
          <button className="delete-button btn btn-danger btn-xs">Delete</button>
        </div>
      </div>
    );
  }
}

PostIt.propTypes = {
  data: React.PropTypes.shape.isRequired
};
