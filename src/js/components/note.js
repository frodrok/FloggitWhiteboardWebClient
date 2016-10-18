import React from 'react';

const Note = props =>
  <li className="list-group-item note" key={props.id} id={props.id}>
    <button className="badge" onClick={props.onRemove}>X</button>
    <p>{props.value}</p>
  </li>;

Note.propTypes = {
  id: React.PropTypes.number,
  onRemove: React.PropTypes.func,
  value: React.PropTypes.string
};

export default Note;