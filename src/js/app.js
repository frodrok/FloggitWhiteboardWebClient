import React from 'react';
import ReactDOM from 'react-dom';
import {
    Provider
} from 'react-redux';

import Whiteboard from './components/whiteboard';
import store from './store';

const myWhiteBoard = ( <
    Provider store = {
        store
    } >
    <
    Whiteboard / >
    <
    /Provider>
);

// ReactDOM.render(top, document.querySelector('.header'));
ReactDOM.render(
    myWhiteBoard, document.querySelector('#container')
);
