import React from 'react';

const ConfirmDeletePostIt = (props) => {
  function handleOk() {
    console.log(`DELETING ${props.id}`);
    props.onDelete(props.id);
  }

  function handleCancel() {
    props.onDelete();
  }
  if (props.isVisible) {
    return (
      <div>
        <div>
          <p>Do you really want to delete this post-it?</p>
        </div>
        <div className="col-lg-10 col-lg-offset-2">
          <button type="reset" className="btn btn-default" onClick={handleCancel}>Cancel</button>
          <button type="button" className="btn btn-primary" onClick={handleOk}>OK</button>
        </div>
      </div>
    );
  }
  return null;
};

ConfirmDeletePostIt.propTypes = () => ({
  isVisible: React.PropTypes.bool,
  id: React.PropTypes.number,
  onDelete: React.PropTypes.func
});

export default ConfirmDeletePostIt;
