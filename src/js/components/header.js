import React from 'react';
import TitleBar from './titlebar';
import AddPostItButton from './addPostItButton';

const Header = props =>
  <div>
    <TitleBar data={'FLOGGIT WHITEBOARD'} />
    <AddPostItButton handleSaveFormInput={props.handleSaveFormInput} />
  </div>;

Header.propTypes = {
  handleSaveFormInput: React.PropTypes.func
};

export default Header;
