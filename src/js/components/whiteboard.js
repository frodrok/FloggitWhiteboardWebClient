import React from 'react';
import $ from 'jquery';

import PostIt from './postIt';

class Whiteboard extends React.Component {

  constructor(props) {
    super(props);
    this.apiUrl = 'http://localhost:8080/api/v1/postits';
    this.state = { postIts: [] };
  }

  componentDidMount() {
    // lint fails, how do we bind 'this' when using fat arrow notation =>
    // (result) => { }.bind(this); fails
    this.serverRequest = $.get(this.apiUrl, function (result) {
      console.log(result);
      this.setState({
        postIts: this.state.postIts.concat(result)
      });
    }.bind(this));
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="post-it panel panel-default">

          {this.state.postIts.map(item => (
            <PostIt data={item.postIt} />)) }
        </div>
      </div>
    );
  }
}

PostIt.propTypes = {
  componentDidMount: React.PropTypes.func
};

export default Whiteboard;
