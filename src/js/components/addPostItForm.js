import React from 'react';

const AddPostItForm = (props) => {
  let title;
  let text;
  let color;

  function setColor() {
    switch (color.value) {
      case 'Blue':
        return 'dodgerblue';
      case 'Green':
        return 'mediumseagreen';
      case 'Pink':
        return 'pink';
      case 'Orange':
        return 'lightsalmon';
      default:
        return 'white';
    }
  }

  function savePostIt() {
    const postTitle = title.value.trim();
    const postText = text.value.trim();
    const postColor = setColor();
    props.onAddPostIt(postTitle, postText, postColor);
    title.value = '';
    title.focus();
  }

  return (
    <form className="form-horizontal">
      <fieldset>
        <legend>Floggit</legend>
        <div className="form-group">
          <label htmlFor="inputTitle" className="col-lg-2 control-label">Title</label>
          <div className="col-lg-10">
            <input type="text" className="form-control" id="inputTitle" placeholder="Title" ref={(c) => { title = c; }} />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description" className="col-lg-2 control-label">Description</label>
          <div className="col-lg-10">
            <textarea className="form-control" id="description" placeholder="Description" ref={(c) => { text = c; }} />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="color" className="col-lg-2 control-label">Color</label>
          <div className="col-lg-10">
            <select className="form-control" id="color" ref={(c) => { color = c; }}>
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
              <input type="text" id="note-item" placeholder="Note" />
              <button type="button" id="add-note-button" className="btn btn-primary btn-sm">Add</button>
            </div>
            <ul className="list-group note-list">
              <li className="list-group-item note">
                <span className="badge">X</span>
                Note 1
              </li>
              <li className="list-group-item note">
                <span className="badge">X</span>
                Note 2
              </li>
            </ul>
          </div>
        </div>

        <div className="form-group">
          <div className="col-lg-10 col-lg-offset-2">
            <button type="button" className="btn btn-primary" onClick={() => { savePostIt(); props.closeModal(); }}>Save
            </button>
            <button type="reset" className="btn btn-default" onClick={props.closeModal}>Cancel</button>
          </div>
        </div>
      </fieldset>
    </form>);
};

AddPostItForm.propTypes = {
  closeModal: React.PropTypes.func
};

export default AddPostItForm;
