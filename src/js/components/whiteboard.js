import React from 'react';
import $ from 'jquery';
import axios from 'axios';

import PostIt from './postit';
import WhiteboardHeader from './whiteboardHeader';
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
    this.handleAddPostIt = this.handleAddPostIt.bind(this);
  }


  componentDidMount() {
    axios.get('http://localhost:8080/api/v1/postits').then((response) => {
      if (response.status === 200) {
        this.setState({
          postIts: response.data
        });
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      postIts: nextProps.postIts
    });
  }
  componentWillUnmount() {
    this.serverRequest.abort();
  }

  handleAddPostIt(titleInput, description, postItColor) {
    const postIt = {
      title: titleInput,
      text: description,
      color: postItColor
    };
    axios({
      method: 'post',
      url: 'http://localhost:8080/api/v1/postits',
      data: postIt
    })
    .then((response) => {
      if (response.status === 201) {
        console.log(response);
        this.setState({
          postIts: this.state.postIts.concat([{
            id: response.data.id,
            item: postIt
          }])
        });
      }
    });
  }

  render() {
    return (
      <div>
        <WhiteboardHeader onAddPostIt={this.handleAddPostIt} />
        <div className="jumbotron">
          <div className="post-it panel panel-default">
            {this.state.postIts.map(item => (
              <PostIt id={item.id} data={item.postIt} onEdit={this.handleEdit} />)) }
          </div>
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
