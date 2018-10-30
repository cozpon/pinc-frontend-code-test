import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMessages } from '../../actions/message.actions';
import Header from '../../components/Header';
import Message from '../../components/Message';

class App extends Component {
  constructor(){
    super();
    this.state = {
      messages: []
    };
  }

  componentDidMount(){
    this.props.loadMessages();
  }

  render() {
    return (
      <div id="main">
        <Header />
        <div className="Message-Grid">
        { this.props.messages.map((message) => {
            return (
              <div key={message.id} className="message-undone">
                <Message
                  body={message.attributes.text}
                  author={message.attributes.author_info.name}
                  id={message.attributes.author_id}
                />
              </div>
            );
          })
        }
      </div>
    </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    messages : state.messagesList, // makes it this.props.messages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMessages: () => {
      dispatch(loadMessages());
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

