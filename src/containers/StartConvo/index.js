import React, { Component } from 'react';

import Modal from '../Modal';

class StartConvo extends Component {
  constructor() {
    super();
    this.state = {
      start: '',
      isOpen: false
    };
    this.handleStartConvoInput = this.handleStartConvoInput.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal () {
    this.setState({
      isOpen: true,
    });
  }

  closeModal () {
    this.setState({
      isOpen: false
    });
  }
  handleStartConvoInput(evt) {
    this.setState({
      start: (evt.target.value)
    });
  }

  render() {
    return (
      <div className="start-body">
        <div id="start-photo">
          <img src={ "/images/1262316.png" } alt="profile" />
        </div>
        <div className="start-input-form">
          <input
            value={ this.state.description }
            id="start-input"
            type="text"
            placeholder="Start a conversation..."
            onChange={ this.handleStartConvoInput }
            onClick={this.openModal}
          />
        </div>

        <Modal
          show={this.state.isOpen}
          onClose={this.closeModal}
          className="Modal-Backdrop" >
          hey
        </Modal>

      </div>
    );
  }
}

export default StartConvo;

