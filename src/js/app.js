import React from 'react';
import ReactDOM from 'react-dom';
import Whiteboard from './components/whiteboard';
import TitleBar from './components/titlebar';

ReactDOM.render(<TitleBar data={'Floggit Whiteboard'} />, document.querySelector('.header'));
ReactDOM.render(<Whiteboard />, document.querySelector('#container'));

