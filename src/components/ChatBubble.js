import React, { useEffect, useState } from 'react'

const ChatBubble = ({ text }) => {
    // Determine the length of the text
    const textLength = text.length;
  
    // Define a class name based on the length of the text
    let className = 'chat-bubble';
    if (textLength <= 50) {
      className += ' short-text';
    } else if (textLength <= 200) {
      className += ' medium-text';
    } else {
      className += ' long-text';
    }

    className += ' align-right';
  
    // Render the chat bubble with the appropriate class name
    return <div className={className}>{text}</div>;
  };
  
  export default ChatBubble;