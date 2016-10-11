import React from 'react';
import axios from 'axios';

import PostIt from './postit';
import WhiteboardHeader from './whiteboardHeader';
import EditDialogue from './editDialogue';

class Whiteboard extends React.Component {

  constructor(props) {
    super(props);
    this.apiUrl = 'http://localhost:8080/api/v1/postits';
    this.state = {
      postIts: [],
      showEdit: false,
      editing: {}
    };
    this.handleEdit = this.handleEdit.bind(this);
    // this.handleSave = this.handleSave.bind(this);
    this.handleAddPostIt = this.handleAddPostIt.bind(this);
    this.getPostItsFromServer = this.getPostItsFromServer.bind(this);
  }

  componentDidMount() {
    this.getPostItsFromServer();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      postIts: nextProps.postIts
    });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
    this.setState({});
  }

  getPostItsFromServer() {
    axios.get(this.apiUrl).then((response) => {
      if (response.status === 200) {
        this.setState({
          postIts: response.data
        });
      }
    });
  }
  handleAddPostIt(titleInput, description, postItColor) {
    const postIt = {
      title: titleInput,
      text: description,
      color: postItColor
    };
    axios({
      method: 'post',
      url: this.apiUrl,
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
        this.getPostItsFromServer();
      });
  }

  handleEdit(id) {
    console.log(this.state.editing);
    console.log(id);
    this.setState({
      showEdit: true,
      editing: this.state.postIts.filter(postit => postit.id === id)[0]
    });
  }

  // handleSave(id, postit) {
  //   console.log(this);
  //   console.log('HANDLE SAVE');
  //   console.log(postit);
  // }


  render() {
    return (
      <div>
        <WhiteboardHeader onAddPostIt={this.handleAddPostIt}/>
        <div className="jumbotron">
          <div className="post-it panel panel-default">
            <ul className="list-group">
              {this.state.postIts.map(item => (
                <PostIt id={item.id} data={item.postIt} onEdit={this.handleEdit}/>)) }
            </ul>
          </div>
        </div>
        <EditDialogue
          isVisible={this.state.showEdit}
          data={this.state.editing}
        />
      </div>
    );
  }
}

export default Whiteboard;
