import React from 'react';
import ReactDOM from 'react-dom';
import Whiteboard from './components/whiteboard';
import TitleBar from './components/titlebar';
import AddPostItButton from './components/addPostItButton';

const Top = React.createClass({
  render() {
    return (<div>
      <TitleBar data={'FLOGGIT WHITEBOARD'} />
      <AddPostItButton />
    </div>
    );
  }
});

ReactDOM.render(<Top />, document.querySelector('.header'));
// ReactDOM.render(top, document.querySelector('.header'));
ReactDOM.render(<Whiteboard />, document.querySelector('#container'));

