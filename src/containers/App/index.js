import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMessages } from '../../actions/message.actions';

import Moment from 'moment';


import StartConvo from '../StartConvo';
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
        <Header profilePhoto={ "/images/1262316.png" } />
      <StartConvo profilePhoto={ "/images/1262316.png"} />
      <div className="message-grid">
        { this.props.messages.map((message) => {
          let messages = message.attributes;
          if(!messages.last_activity_info.answer_info){
            return (
              <div className="Message" key={ message.id }>
                <Message
                  topic={ messages.group['0'].title }
                  date={ Moment(messages.created_at).fromNow() }
                  body={ messages.text }
                  author={ messages.author_info.name }
                  authorImage={ messages.author_info.avatar_thumb }
                  authorId={ messages.author_id }
                />
              </div>
              );
            } else {
              return (
              <div className="Message" key={ message.id }>
                <Message
                  topic={ messages.group['0'].title }
                  date={ Moment(messages.created_at).fromNow() }
                  body={ messages.text }
                  author={ messages.author_info.name }
                  authorImage={ messages.author_info.avatar_thumb }
                  authorId={ messages.author_id }
                  comments= { messages.last_activity_info.author_info.avatar_thumb }
                  reply={messages.last_activity_info.answer_info.text}
                  replyImage={messages.last_activity_info.author_info.avatar_thumb}
                  replyAuthor={messages.last_activity_info.author_info.name}
                  replyId={messages.last_activity_info.author_info.id}
                />
              </div>
              );
            }
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

