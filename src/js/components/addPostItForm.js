import React from 'react';

const AddPostItForm = () => <form className="form-horizontal">
  <fieldset>
    <legend>Floggit</legend>
    <div className="form-group">
      <label htmlFor="inputTitle" className="col-lg-2 control-label">Title</label>
      <div className="col-lg-10">
        <input type="text" className="form-control" id="inputTitle" placeholder="Title"/>
      </div>
    </div>

    <div className="form-group">
      <label htmlFor="description" className="col-lg-2 control-label">Description</label>
      <div className="col-lg-10">
        <textarea className="form-control" id="description" placeholder="Description"/>
      </div>
    </div>

    <div className="form-group">
      <label htmlFor="color" className="col-lg-2 control-label">Color</label>
      <div className="col-lg-10">
        <select className="form-control" id="color">
          <option>Blue</option>
          <option>Green</option>
          <option>Pink</option>
          <option>Orange</option>
        </select>
      </div>
    </div>

    <div className="form-group" id="note-form">
      <label htmlFor="note-item" className="col-lg-2 control-label" id="note-label">Note</label>
      <div className="note-container-body col-lg-10">
        <div className="note-input">
          <input type="text" id="note-item" placeholder="Note"/>
          <button type="button" id="add-note-button" className="btn btn-primary btn-sm">Add</button>
        </div>
        <ul className="list-group note-list">
          {/* <li className="list-group-item note"> */}
          {/* <span className="badge">X</span> */}
          {/* Note 1 */}
          {/* </li> */}
          {/* <li className="list-group-item note"> */}
          {/* <span className="badge">X</span> */}
          {/* Note 2*/}
          {/* </li> */}
        </ul>
      </div>
    </div>
  </fieldset>
</form>;

export default AddPostItForm;
