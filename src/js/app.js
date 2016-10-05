import React from 'react';
import ReactDOM from 'react-dom';

const FirstElement = React.createClass({
   render: () => {
       return (
           <h1>Ululululululul wololoooo</h1>
       );
   }
});

ReactDOM.render(<FirstElement />, document.querySelector('#container'));
