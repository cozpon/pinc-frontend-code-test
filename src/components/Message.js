import React from 'react';

const Message = ({ body, author, id, image }) => {
  return (
    <div className="message-item">
      <div id="body"> {author} said : { body } </div><br/>
      <div id="image"> <img src={image} /> </div>
    </div>
  );
}

export default Message;
