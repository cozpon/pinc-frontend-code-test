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
            onClick={ this.openModal }
          />
        </div>

        <Modal show={ this.state.isOpen } className="Modal-Backdrop">
          <div className="modal-top">
            <img src={ "/images/1262316.png" } alt="profile" />
            <div id="question-name">
              <b>Rafael Doe</b> in
              <a href="" id="add-group">
                &#43; Add Group </a>
            </div>
            <button id="modal-button" onClick={ this.closeModal }> X </button>
          </div>
          <div className="question-input-body">
            <div id="question-input">
            What is your question? Make it short and simple
            </div>
            <div className="question-input-form">
              <div id="right-arrow">
                <div id="arrow">
                  &#10095;
                </div>
              </div>
              <input
                value={ this.state.description }
                id="question-form"
                type="text"
                onChange={ this.handleStartConvoInput } />
            </div>
          </div>
          <div className="modal-bottom">
            <div id="anonymous">
            <input type="checkbox" name="anonymous" value="Anonymous" />
              Be anonymous
            </div>
              <button
                className="post-button"
                type="submit"
                onClick={this.closeModal}>
                Post
              </button>
          </div>
        </Modal>

      </div>
    );
  }
}

export default StartConvo;

