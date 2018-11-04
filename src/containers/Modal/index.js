import React, { Component } from 'react';

class Modal extends Component {
  render() {
    // Don't render if the "show" prop is false
    if(!this.props.show) {
      return null;
    }
    return (
      <div className="Modal-Backdrop">
        <div className="Modal" onClick={this.props.onClose}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;