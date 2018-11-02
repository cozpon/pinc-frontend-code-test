import React, { Component } from 'react';
import { connect } from 'react-redux';

class StartConvo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: ''
    };
    this.handleStartConvoInput = this.handleStartConvoInput.bind(this);
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
          <img src={ "/images/1262316.png" } />
        </div>
        <div className="start-input-form">
          <input
            value={ this.state.description }
            id="start-input"
            type="text"
            placeholder="Start a conversation..."
            onChange={ this.handleStartConvoInput }
          />
        </div>
      </div>
    );
  }
}

export default StartConvo;

