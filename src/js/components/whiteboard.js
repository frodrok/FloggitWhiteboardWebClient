import React from 'react';
import axios from 'axios';

import PostIt from './postit';
import WhiteboardHeader from './whiteboardHeader';

export default class Whiteboard extends React.Component {

  constructor(props) {
    super(props);
    this.apiUrl = 'http://localhost:8080/api/v1/postits';
    this.state = { postIts: [] };
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
              <PostIt data={item.postIt} />)) }
          </div>
        </div>
      </div>
    );
  }
}
