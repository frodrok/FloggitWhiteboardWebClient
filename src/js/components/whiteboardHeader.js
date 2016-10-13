import React from 'react';
import TitleBar from './titlebar';
import AddPostItButton from './addPostItButton';

const WhiteboardHeader = props => (
  <div>
    <TitleBar data={'FLOGGIT WHITEBOARD'}/>
      <AddPostItButton onAddPostIt={props.onAddPostIt}/>
  </div>);

export default WhiteboardHeader;
