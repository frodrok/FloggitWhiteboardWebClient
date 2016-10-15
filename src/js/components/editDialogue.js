import React from 'react';

const EditDialogue = (props) => {
  let title;
  let text;
  let color;

  function updatePostIt() {
    const postTitle = title.value.trim();
    const postText = text.value.trim();
    const postColor = color.value;
    props.onUpdatePostIt(props.data.id, postTitle, postText, postColor);
    props.onUpdate();
  }

  if (props.isVisible && props.data !== null) {
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
                defaultValue={props.data.postIt.title}
                ref={(c) => { title = c; }}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description" className="col-lg-2 control-label">Description</label>
            <div className="col-lg-10">
              <textarea
                className="form-control"
                id="description"
                defaultValue={props.data.postIt.text}
                ref={(c) => { text = c; }}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="color" className="col-lg-2 control-label">Color</label>
            <div className="col-lg-10">
              <select className="form-control" id="color" defaultValue={props.data.postIt.color} ref={(c) => { color = c; }}>
                <option>Blue</option>
                <option>Green</option>
                <option>Pink</option>
                <option>Orange</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="col-lg-10 col-lg-offset-2">
              <button type="button" className="btn btn-primary" onClick={updatePostIt}>Save</button>
              <button type="reset" className="btn btn-default">Cancel</button>
            </div>
          </div>
        </fieldset>
      </form>

    );
  }
  return null;
};

EditDialogue.propTypes = () => ({
  data: React.PropTypes.shape.isRequired,
  onUpdate: React.PropTypes.func
});

export default EditDialogue;
