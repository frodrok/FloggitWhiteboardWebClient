import React from 'react';

export default class PostIt extends React.Component {

	propTypes: {
		data: React.PropTypes.string.isRequired,
	};

	render() {
		console.log(this);

		return (
				<div className="panel-body" style={{'backgroundColor': this.props.data.color }}>
				<ul className="label-color-list">
					<li className="label-color"></li>
					<li className="label-color"></li>
				</ul>
				<p className="title" style={{textDecoration: 'underline'}}>{this.props.data.title}</p>
				<p className="title">{this.props.data.text}</p>
				<div className="col-lg-10 col-lg-offset-2">
					<button className="edit-button btn btn-default btn-xs">Edit</button>
					<button className="delete-button btn btn-danger btn-xs">Delete</button>
				</div>
			</div>
		);
	}
};
