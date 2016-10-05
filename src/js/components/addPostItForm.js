import React from 'react';

export default class AddPostItForm extends React.Component {
  render() {
    return (<form className="form-horizontal">
        <fieldset>
          <legend>Floggit</legend>
          <div className="form-group">
            <label for="inputTitle" className="col-lg-2 control-label">Title</label>
            <div className="col-lg-10">
              <input type="text" className="form-control" id="inputTitle" placeholder="Title"/>
            </div>
          </div>

          <div className="form-group">
            <label for="description" className="col-lg-2 control-label">Description</label>
            <div className="col-lg-10">
              <textarea className="form-control" id="description" placeholder="Description"></textarea>
            </div>
          </div>

          <div className="form-group">
            <label for="color" className="col-lg-2 control-label">Color</label>
            <div className="col-lg-10">
              <select className="form-control" id="color">
                <option>Blue</option>
                <option>Green</option>
                <option>Pink</option>
                <option>Orange</option>
                <option>Red</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <div className="col-lg-10 col-lg-offset-2">
              <button type="submit" className="btn btn-primary">Save</button>
              <button type="reset" className="btn btn-default">Cancel</button>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
}

