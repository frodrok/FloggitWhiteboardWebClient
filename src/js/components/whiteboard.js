import React from 'react';
import PostIt from './postit';

const data = [{
  title: 'diska',
  text: 'fixa disken',
  timeCreated: '2016-10-05 11:10',
  color: 'blue'
},
  {
    title: 'tvätta',
    text: 'fixa tvätten',
    timeCreated: '2016-10-05 11:20',
    color: 'honeydew'
  },
  {
    title: 'smutsa',
    text: 'fixa smutsen',
    timeCreated: '2016-10-05 11:30',
    color: 'pink'
  }];

const rComps = [];

// postIt: {
//  title: item.title,
// text: item.text,
// timeCreated: item.timeCreated,
// color: item.color
// }


data.forEach(function (elem, index) {
 // rComps.push(React.createElement(PostIt, { data: elem }));
  rComps.push(<PostIt data={elem} key={index} />);
});

module.exports = React.createClass({
  render: function () {
  return (
    <div className="jumbotron">
      <div className="post-it panel panel-default">
        {rComps}
      </div>
    </div>
);
  }
});

const Board = () => (
  <div className="jumbotron">
    <div className="post-it panel panel-default">
      {rComps}
    </div>
  </div>

);

export default Board;
