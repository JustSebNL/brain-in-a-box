import React from 'react';
import { saveToVector } from '../utils/vectorStore.js';

class SaveButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSaving: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isSaving: true });
    saveToVector(this.props.data)
      .then(() => {
        this.setState({ isSaving: false });
      })
      .catch((error) => {
        console.error('Error saving to vector:', error);
        this.setState({ isSaving: false });
      });
  }

  render() {
    return (
      <button id="save-button" onClick={this.handleClick} disabled={this.state.isSaving}>
        {this.state.isSaving ? 'Saving...' : 'Save'}
      </button>
    );
  }
}

export default SaveButton;