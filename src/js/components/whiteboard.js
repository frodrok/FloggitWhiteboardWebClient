import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';

import PostIt from './postit';
import WhiteboardHeader from './whiteboardHeader';
import EditDialogue from './editDialogue';
import ConfirmDeletePostIt from './confirmDeleteDialog';

const confirmDialogStyles = {
  content: {
    top: '40%',
    left: '20%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const editDialogStyles = {
  content: {
    position: 'fixed',
    display: 'flex',
    flexWrap: 'wrap',
    width: '50%'
  }
};

class Whiteboard extends React.Component {

  constructor(props) {
    super(props);
    this.apiUrl = 'http://localhost:8080/api/v1/postits';
    this.state = {
      postIts: [],
      showEdit: false,
      editing: {},
      beingDeleted: 0,
      confirmIsVisible: false
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleAddPostIt = this.handleAddPostIt.bind(this);
    this.getPostItsFromServer = this.getPostItsFromServer.bind(this);
    this.handleUpdatePostIt = this.handleUpdatePostIt.bind(this);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleDeletePostIt = this.handleDeletePostIt.bind(this);
    this.handleExit = this.handleExit.bind(this);
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

  handleAddPostIt(titleInput, description, postItColor, noteList) {
    const postIt = {
      title: titleInput,
      text: description,
      color: postItColor,
      notes: noteList
    };
    axios({
      method: 'post',
      url: this.apiUrl,
      data: postIt
    })
      .then((response) => {
        if (response.status === 201) {
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
    this.setState({
      showEdit: true,
      editing: this.state.postIts.filter(postit => postit.id === id)[0]
    });
  }

  handleUpdatePostIt(id, postTitle, postText, postColor, postNotes) {
    const postIt = {
      title: postTitle,
      text: postText,
      timeCreated: this.state.editing.postIt.timeCreated,
      color: postColor,
      notes: postNotes
    };
    axios({
      method: 'put',
      url: `${this.apiUrl}/${id}`,
      data: postIt
    })
     .then((response) => {
       console.log(response.data);
       this.getPostItsFromServer();
     });
  }

  handleUpdateClick() {
    this.setState({
      showEdit: false
    });
  }

  handleExit() {
    this.setState({
      showEdit: false
    });
  }

  handleDeleteClick(id) {
    // const itemToDelete = this.state.postIts.filter(item => item.id === id);
    this.setState({
      beingDeleted: id,
      confirmIsVisible: true
    });
  }

  handleDeletePostIt(id) {
    if (!id) {
      this.setState({
        beingDeleted: 0,
        confirmIsVisible: false
      });
    } else {
      axios.delete(`${this.apiUrl}/${id}`).then((response) => {
        if (response.status === 200) {
          this.setState({
            postIts: this.state.postIts.filter(item => item.id !== id),
            beingDeleted: 0,
            confirmIsVisible: false
          });
        }
        this.getPostItsFromServer();
      });
    }
  }

  render() {
    return (
      <div>
        <WhiteboardHeader onAddPostIt={this.handleAddPostIt} />
        <div className="post-its-container">
          <ul className="list-group">
            {this.state.postIts.map(item => (
              <PostIt
                key={item.id}
                id={item.id}
                data={item.postIt}
                onEdit={this.handleEdit}
                confirmIsVisible={this.state.confirmIsVisible}
                onDelete={this.handleDeleteClick}
              />)).reverse() }
          </ul>
        </div>
        <Modal isOpen={this.state.showEdit} style={editDialogStyles}>
          <EditDialogue
            isVisible={this.state.showEdit}
            data={this.state.editing}
            onUpdatePostIt={this.handleUpdatePostIt}
            onUpdate={this.handleUpdateClick}
            onExit={this.handleExit}
          />
        </Modal>
        <Modal isOpen={this.state.confirmIsVisible} style={confirmDialogStyles}>
          <ConfirmDeletePostIt
            isVisible={this.state.confirmIsVisible}
            id={this.state.beingDeleted}
            onDelete={this.handleDeletePostIt}
          />
        </Modal>
      </div>
    );
  }
}

export default Whiteboard;
