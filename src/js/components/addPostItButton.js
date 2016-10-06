import React from 'react';
import AddPostItForm from './addPostItForm';

const AddPostItButton = () => (
  <div>
    <button type="button" id="button" className="btn btn-primary">add note</button>
  </div>

);

export default AddPostItButton;

// export default class AddPostItButton extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.state = { showForm: false };
//   }
//
//   handleClick(index) {
//     this.setState({ showForm: !this.state.showForm });
//   }
//
//   render() {
//     return (<div>
//<button type="button" id="button" className="btn btn-primary" onClick={this.handleClick.bind(this)}>add note</button>
//       { this.state.showForm ? <AddPostItForm /> : null}
//     </div>
//         );
//   }
// }
