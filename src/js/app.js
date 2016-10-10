import React from 'react';
import ReactDOM from 'react-dom';
import Whiteboard from './components/whiteboard';
import Header from './components/header';

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      onSave: false
    };
    this.handleSaveFormInput = this.handleSaveFormInput.bind(this);
  }

  handleSaveFormInput() {
    this.setState({ onSave: true });
  }

  render() {
    return (
      <div>
        <Header handleSaveFormInput={this.handleSaveFormInput} />
        <Whiteboard onSave={this.state.onSave} />
      </div>
    );
  }
}

Container.propTypes = {
  handleSaveFormInput: React.PropTypes.func
};

ReactDOM.render(<Container />, document.querySelector('#container'));
