import React from 'react';
import $ from 'jquery';

import PostIt from './postit';
import EditDialogue from './editDialogue';

export default class Whiteboard extends React.Component {

  constructor(props) {
    super(props);
    this.apiUrl = 'http://localhost:8080/api/v1/postits';
    this.state = {
      postIts: [],
      showEdit: false,
      editing: null };
    this.handleEdit = this.handleEdit.bind(this);
  }


  componentDidMount() {
    // lint fails, how do we bind 'this' when using fat arrow notation =>
    // (result) => { }.bind(this); fails
    this.serverRequest = $.get(this.apiUrl, function(result) {
      console.log(result);
      this.setState({
        postIts: this.state.postIts.concat(result)
      });
    }.bind(this));
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  handleEdit(id) {
    console.log(id);
    this.setState({
      showEdit: true,
      editing: this.state.postIts.filter(postit => postit.id === id)[0].postIt
    });
    // const item = this.state.postIts.filter(postit => postit.id === id)[0];
    // return item.postIt;
  }


  render() {
    return (
      <div className="jumbotron">
        <div className="post-it panel panel-default">

          {this.state.postIts.map(item => (
            <PostIt id={item.id} data={item.postIt} onEdit={this.handleEdit} />)) }
        </div>
        <EditDialogue isVisible={this.state.showEdit} data={this.state.editing} />
      </div>
    );
  }
}
