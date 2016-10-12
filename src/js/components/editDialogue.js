import React from 'react';

const EditDialogue = (props) => {
  // let title;
  // let text;

  // function update() {
  //   const postit = { id: props.data.id,
  //           postIt: { title: title.value, text: text.value, color: props.data.postIt.color } };
  //   props.onSave(props.data.id, postit);
  // }
  if (props.isVisible && props.data !== null) {
    return (
      <form className="form-horizontal">
        <fieldset>
          <legend>Floggit</legend>
          <div className="form-group">
            <label htmlFor="inputTitle" className="col-lg-2 control-label">Title</label>
            <div className="col-lg-10">
              <input type="text" className="form-control" id="inputTitle" defaultValue={props.data.postIt.title} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description" className="col-lg-2 control-label">Description</label>
            <div className="col-lg-10">
              <textarea className="form-control" id="description" defaultValue={props.data.postIt.text} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="color" className="col-lg-2 control-label">Color</label>
            <div className="col-lg-10">
              <select className="form-control" id="color">
                {
                  ['blue', 'green', 'pink', 'orange'].map(val => <option
                    selected={val === props.data.postIt.color.toLowerCase()}
                  >{val}</option>)
                }
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="col-lg-10 col-lg-offset-2">
              <button type="button" className="btn btn-primary">Save</button>
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
  data: React.PropTypes.shape.isRequired
});

export default EditDialogue;

// ref={(c) => { text = c; }}
