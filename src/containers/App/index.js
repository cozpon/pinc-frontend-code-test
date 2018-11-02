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
        <Header
          profilePhoto={ "/images/1262316.png" } />
        <div className="message-body">
        { this.props.messages.map((message) => {
          console.log(message);
          let messages = message.attributes;
            return (
              <div className="Message" key={ message.id }>
                <Message
                  body={ messages.text }
                  author={ messages.author_info.name }
                  image={ messages.author_info.avatar_thumb }
                  id={ messages.author_id }
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

