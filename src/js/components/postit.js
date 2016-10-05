import React from 'react';

// class PostIt extends React.Component {
// 	render() {
// 		return (
			{/*<h1>Hello, {this.props.data}</h1>*/}
		// );
	// }
// }

module.exports = React.createClass({
	render() {
		return (
			<p>Hello, {this.props.data}</p>
		);
	}
});