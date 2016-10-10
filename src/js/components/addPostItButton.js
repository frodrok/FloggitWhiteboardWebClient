import React from 'react';
import Modal from 'react-modal';
import PostItForm from './postItForm';

const customStyles = {
  content: {
    position: 'fixed',
    display: 'flex',
    flexWrap: 'wrap',
    width: '50%'
    // top: '40%',
    // left: '20%',
    // right: 'auto',
    // bottom: 'auto',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)'
  }
};

class AddPostItButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      modalIsOpen: false
    };
  }

  componentWillMount() {
    this.onClick = this.onClick.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  onClick() {
    this.setState({ showForm: !this.state.showForm });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.refs.subtitle.style.color = '#f00';
    // need to use 'this' for lintrules
    this.fuu = 'wow';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  handleSaveFormInput() {
    this.props.handleSaveFormInput();
  }

  render() {
    return (
      <div>
        <button type="button" id="add-post-it-button" className="btn btn-primary btn-lg" onClick={this.openModal}>Add
          Post-it
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <PostItForm closeModal={this.closeModal} handleSaveFormInput={this.handleSaveFormInput} />
        </Modal>
      </div>
    );
  }
}

AddPostItButton.propTypes = {
  handleSaveFormInput: React.PropTypes.func
};

export default AddPostItButton;
