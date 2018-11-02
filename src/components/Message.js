import React from 'react';

const Message = ({ topic, date, body, author, image, id, comments, reply}) => {
  if(comments !== undefined){
    return (
      <div className="message-grid">
        <div className="topicdate">
          { topic }
        </div>
        <div id="message-photo">
          <img src={ image } alt="profile-photo" />
        </div>
        <div id="message-body">
          { body }
        </div>
        <div id="message-author">
          posted by { author }
          <br />comments by
          <img src={ comments } alt="profile-photo" id="message-photo" style={{marginLeft: '20px'}}/>
        </div>
        <div id="message-reply">
          { reply }
        </div>
      </div>
    );
  } else {
      return (
        <div className="message-grid">
          <div className="topicdate">
            { topic }
          </div>
          <div id="message-photo">
            <img src={ image } alt="profile-photo" />
          </div>
          <div id="message-body">
            { body }
          </div>
          <div id="message-author">
            posted by { author }, no comments yet!
          </div>
        </div>
      );
    }
}

export default Message;
