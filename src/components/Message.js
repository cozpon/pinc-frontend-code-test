import React from 'react';

const Message = ({ body, author, id }) => {
  console.log(body, "component");
  return (
    <div className="Messages">
      <div id="body"> {author} said : { body } </div><br/>

    </div>
  );
}

export default Message;
