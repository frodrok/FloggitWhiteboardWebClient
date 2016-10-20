import React from 'react';
import Note from './note';

const generateId = () => +(new Date());

class EditDialogue extends React.Component {

  constructor() {
    super();
    this.state = {
      notes: []
    };
    this.setColor = this.setColor.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleRemoveNote = this.handleRemoveNote.bind(this);
    this.updatePostIt = this.updatePostIt.bind(this);
    this.exitForm = this.exitForm.bind(this);
  }

  componentWillMount() {
    this.setState({
      notes: this.props.data.postIt.notes
    });
  }

  setColor() {
    switch (this.color.value) {
      case 'Blue':
        return {
          name: 'Blue',
          code: 'dodgerblue'
        };
      case 'Green':
        return {
          name: 'Green',
          code: 'mediumseagreen'
        };
      case 'Pink':
        return {
          name: 'Pink',
          code: 'pink'
        };
      case 'Orange':
        return {
          name: 'Orange',
          code: 'lightsalmon'
        };
      default:
        return {
          name: 'Blue',
          code: 'dodgerblue'
        };
    }
  }

  title;
  text;
  color;
  noteInput;

  handleAddNote() {
    const noteText = this.noteInput.value.trim();
    let note;
    if (noteText.length > 0) {
      note = { id: generateId(), value: noteText };
      this.noteInput.value = '';
      this.setState({ notes: [...this.state.notes, note] });
    }
  }

  handleRemoveNote(id) {
    this.setState({ notes: this.state.notes.filter(item => item.id !== id) });
  }

  updatePostIt() {
    const postTitle = this.title.value.trim();
    const postText = this.text.value.trim();
    const postColor = this.setColor();
    const timeCreated = this.props.data.postIt.timeCreated;
    this.props.onUpdatePostIt(this.props.data.id, postTitle, postText, postColor, this.state.notes, timeCreated);
    // this.props.onUpdate();
  }

  exitForm() {
    this.props.onExit();
  }

  render() {
    if (this.props.isVisible && this.props.data !== null) {
      return (
        <form className="form-horizontal">
          <fieldset>
            <legend>Floggit</legend>
            <div className="form-group">
              <label htmlFor="inputTitle" className="col-lg-2 control-label">Title</label>
              <div className="col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputTitle"
                  defaultValue={this.props.data.postIt.title}
                  ref={(c) => {
                    this.title = c;
                  }}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description" className="col-lg-2 control-label">Description</label>
              <div className="col-lg-10">
                <textarea
                  className="form-control"
                  id="description"
                  defaultValue={this.props.data.postIt.text}
                  ref={(c) => {
                    this.text = c;
                  }}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="color" className="col-lg-2 control-label">Color</label>
              <div className="col-lg-10">
                <select
                  className="form-control"
                  id="color"
                  defaultValue={this.props.data.postIt.color.name}
                  ref={(c) => {
                    this.color = c;
                  }}
                >
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
                  <input
                    type="text"
                    id="note-item"
                    placeholder="Note"
                    ref={(c) => {
                      this.noteInput = c;
                    }}
                  />
                  <button
                    type="button"
                    id="add-note-button"
                    className="btn btn-primary btn-sm"
                    onClick={this.handleAddNote}
                  >
                    Add
                  </button>
                </div>
                <ul className="list-group note-list">
                  {this.state.notes.map(noteItem => (
                    <Note
                      key={noteItem.id}
                      id={noteItem.id}
                      value={noteItem.value}
                      onRemove={() => this.handleRemoveNote(noteItem.id)}
                    />
                  ))}
                </ul>
              </div>
            </div>

            <div className="form-group">
              <div className="col-lg-10 col-lg-offset-2">
                <button type="button" className="btn btn-primary" onClick={this.updatePostIt}>Save</button>
                <button type="reset" className="btn btn-default" onClick={this.exitForm}>Cancel</button>
              </div>
            </div>
          </fieldset>
        </form>
      );
    }
    return null;
  }
}

EditDialogue.propTypes = () => ({
  data: React.PropTypes.shape.isRequired,
  onUpdate: React.PropTypes.func
});

export default EditDialogue;
