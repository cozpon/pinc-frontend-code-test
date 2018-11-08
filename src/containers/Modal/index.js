import React, { Component } from 'react';

class Modal extends Component {
  render() {
    // Don't render if the "show" prop is false
    if(!this.props.show) {
      return null;
    }
    // onClick={this.props.onClose}
    return (
      <div className="Modal-Backdrop" >
        <div className="Modal">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;