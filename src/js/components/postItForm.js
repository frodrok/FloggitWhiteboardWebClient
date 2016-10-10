import React from 'react';

class PostItForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Title',
      description: 'Description',
      color: 'Color',
      note: []
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  handleColorChange(event) {
    this.setState({ color: event.target.value });
  }

  handleNoteChange(event) {
    this.setState({ note: this.state.note.concat(event.target.value) });
  }

  render() {
    return (
      <form className="form-horizontal">
        <fieldset>
          <legend>Floggit</legend>

          <div className="form-group">
            <label htmlFor="input-title" className="col-lg-2 control-label">Title</label>
            <div className="col-lg-10">
              <input type="text" className="form-control" id="input-title" placeholder="Title" onChange={this.handleTitleChange}/>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description" className="col-lg-2 control-label">Description</label>
            <div className="col-lg-10">
              <textarea className="form-control" id="description" placeholder="Description" onChange={this.handleDescriptionChange}/>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="color" className="col-lg-2 control-label">Color</label>
            <div className="col-lg-10">
              <select value="Blue" className="form-control" id="color" onChange={this.handleColorChange}>
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
              <ul className="list-group note-list" onChange={this.handleNoteChange}>
                {/*<li className="list-group-item note">*/}
                  {/*<span className="badge">X</span>*/}
                  {/*Note 1*/}
                {/*</li>*/}
                {/*<li className="list-group-item note">*/}
                  {/*<span className="badge">X</span>*/}
                  {/*Note 2*/}
                {/*</li>*/}
              </ul>
            </div>
          </div>
          <div className="form-group">
            <div className="col-lg-10 col-lg-offset-2 form-button">
              <div>
                <button type="reset" className="btn btn-default" onClick={this.props.closeModal}>Cancel</button>
              </div>
              <div>
                <button type="submit" className="btn btn-primary" onClick={this.props.handleSaveFormInput}>Save</button>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
}

PostItForm.propTypes = {
  closeModal: React.PropTypes.func,
  handleSaveFormInput: React.PropTypes.func
};

export default PostItForm;
