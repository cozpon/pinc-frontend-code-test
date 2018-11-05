import React from 'react';

const Message = ({ topic, date, body, author, authorImage, authorId, comments, reply, replyImage, replyAuthor, replyId}) => {
  if(comments !== undefined){
    return (
      <div className="message-grid">
        <div className="topicdate">
          { topic }&nbsp;&nbsp;&sdot;{ date }
        </div>
        <div id="message-item">
          <div id="message-photo">
            <img src={ authorImage } alt="profile-photo" />
          </div>
          <div id="message-body">
            { body }
          </div>
          <div id="message-author">
            posted by&nbsp;
              <a href={`/users/${authorId}`}>{ author }</a>
            &nbsp;comments by
            <img src={ comments } alt="profile" id="message-comment-photo"/>
          </div>
        </div>
        <hr />

        <div className="react-comment">
          <img src="./images/React.png" alt="react"/>
          <div id="react">
            React
          </div>

          <img src="./images/Comment.png" alt="comment"/>
          <div id="comment">
            Comment
          </div>
        </div>

        <hr />
        <div id="message-reply-photo">
          <a href={`/users/${replyId}`}>
            <img src={ replyImage } alt="profile" />
          </a>
        </div>
        <div id="message-reply">
          <div id="message-reply-author">
            <a href={`/users/${replyId}`}>{ replyAuthor }</a>
          </div>
          <div id="message-reply-body">
            { reply }
          </div>
        </div>
      </div>
    );
  } else {
      return (
        <div className="message-grid">
          <div className="topicdate">
            { topic }&nbsp;&nbsp;&sdot;{ date }
          </div>
          <div id="message-item">
            <div id="message-photo">
              <img src={ authorImage } alt="profile" />
            </div>
            <div id="message-body">
              { body }
            </div>
            <div id="message-author">
              posted by&nbsp;
              <a href={`/users/${authorId}`}>{ author }</a>
              &nbsp;no comments yet.
            </div>
          </div>
          <hr />
          <div className="react-comment">

            <img src="./images/React.png" alt="react"/>
            <div id="react">
              React
            </div>

            <img src="./images/Comment.png" alt="comment"/>
            <div id="comment">
              Comment
            </div>
          </div>
          <hr />
        </div>
      );
    }
}

export default Message;
