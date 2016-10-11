import React from 'react';
import $ from 'jquery';
import axion from 'axion';

import PostIt from './postit';
import EditDialogue from './editDialogue';

export default class Whiteboard extends React.Component {

  constructor(props) {
    super(props);
    this.apiUrl = 'http://localhost:8080/api/v1/postits';
    this.state = {
      postIts: [],
      showEdit: false,
      editing: {} };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }


  componentDidMount() {
    // lint fails, how do we bind 'this' when using fat arrow notation =>
    // (result) => { }.bind(this); fails
    this.serverRequest = $.get(this.apiUrl, (result) => {
      this.setState({
        postIts: this.state.postIts.concat(result)
      });
    });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  handleEdit(id) {
    this.setState({
      showEdit: true,
      editing: this.state.postIts.filter(postit => postit.id === id)[0]
    });

    // const item = this.state.postIts.filter(postit => postit.id === id)[0];
    // return item.postIt;
  }

  handleSave(id, postit) {
    console.log('HANDLE SAVE');
    console.log(postit);
    // this.setState({
  	// 	postIts: postIts.map((item) =>  )
    // });
    // this.setState({
    //   showEdit: false,
    //   editing: null
    // });
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="post-it panel panel-default">

          {this.state.postIts.map(item => (
            <PostIt id={item.id} data={item.postIt} onEdit={this.handleEdit} />)) }
        </div>
        <EditDialogue
          isVisible={this.state.showEdit}
          data={this.state.editing}
          onSave={this.handleSave}
        />
      </div>
    );
  }
}
