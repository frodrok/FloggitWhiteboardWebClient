import React from 'react';

const ConfirmDeletePostIt = (props) => {
  if (props.isVisible) {
    return (
      <div>
        <div>
          <p>Do you really want to delete this post-it?</p>
        </div>
        <div className="col-lg-10 col-lg-offset-2">
          <button className="btn btn-default">Cancel</button>
          <button className="btn btn-primary">OK</button>
        </div>
      </div>
    );
  }
  return null;
};

ConfirmDeletePostIt.propTypes = () => ({
  isVisible: React.PropTypes.bool
});

export default ConfirmDeletePostIt;
