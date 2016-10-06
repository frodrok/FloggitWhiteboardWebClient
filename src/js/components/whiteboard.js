import React from 'react';
import $ from 'jquery';

import PostIt from './postit';

export default class Whiteboard extends React.Component {

  constructor(props) {
    super(props);
    this.apiUrl = 'http://localhost:8080/api/v1/postits';
    this.state = { postIts: [] };
  }

  componentDidMount() {
    // lint fails, how do we bind 'this' when using fat arrow notation =>
    // (result) => { }.bind(this); fails
    this.serverRequest = $.get(this.apiUrl, function(result) {
      const reactPostIts = this.serverDataToReactPostIts(result);
      this.setState({ postIts: reactPostIts });
    }.bind(this));
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  serverDataToReactPostIts(jsonResult) {
    const reactComponents = [];

    jsonResult.forEach((element, index) => {
      reactComponents.push(<PostIt data={element} key={index} />);
    });

    return reactComponents;
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="post-it panel panel-default">
          {this.state.postIts}
        </div>
      </div>
    );
  }
}

