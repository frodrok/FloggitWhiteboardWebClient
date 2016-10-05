import React from 'react';
import PostIt from './postit';

const data = ['kreti', 'pleti', 'smeti'];
const rComps = [];

data.forEach(function (elem, index) {
	// rComps.push(React.createElement(PostIt, { data: elem }));
	rComps.push(<PostIt data={elem} key={index} />);
});

module.exports = React.createClass({
	render: function () {
		return (
			<div className="bigbox jumbotron">
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>{rComps}</tbody>
				</table>
			</div>
		);
	}
});
