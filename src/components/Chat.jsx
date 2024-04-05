import React, { useState } from 'react';
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdMic } from "react-icons/io";
import { MdSend } from "react-icons/md";

const Chat = () => {
  const [message, setMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [sentMessages, setSentMessages] = useState([]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSend = () => {
    if (message.trim() !== '') {
      // Append the current message to the array of sent messages
      setSentMessages([...sentMessages, message]);
      // Clear the message after sending
      setMessage('');
    }
  };

  const handleKeyPress = (event) => {
    // Check if Enter key is pressed (key code 13) and holding the Shift key
    if (event.keyCode === 13 && event.shiftKey) {
      // Prevent the default behavior of adding a newline
      event.preventDefault();
      // Append a newline character to the message
      setMessage(message + '\n');
    }
    // If Enter key is pressed without Shift, treat it as sending the message
    else if (event.keyCode === 13) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <div className='p-2 w-full min-h-dvh relative'>
        <div className='flex justify-end'>
          <div className='text-right max-w-[80%] min-w-[40%] text-white mt-2 p-2 mb-2'>
            {/* Render each sent message in its own div */}
            {sentMessages.map((sentMessage, index) => {
              // Get current date and time for each message
              const currentTime = new Date();
              // Format the time as HH:MM
              const formattedTime = `${currentTime.getHours()}:${currentTime.getMinutes().toString().padStart(2, '0')}`;
  
              return (
                <div key={index} style={{ clear: 'both' }}>
                  <div className='bg-[#005C4C] rounded-lg my-1 px-2 pt-2 inline-block' style={{ maxWidth: '100%' }}>
                    {/* Apply word-wrap: break-word to the span containing the message */}
                    <span style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                      {/* Replace newline characters with <br> tags */}
                      {sentMessage.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </span>
                    {/* Render timestamp along with the message */}
                    <span className="text-gray-400 text-xs ">{formattedTime}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='p-2 bg-custom2 top-0 left-0 right-0 bottom-0 flex items-center'>
        <BsEmojiSmile className='search-icon mr-2 cursor-pointer' size={25} />
        <AiOutlinePlus className='search-icon mr-2 cursor-pointer' size={25} />
        <textarea
          value={message}
          onChange={handleMessageChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyPress}
          placeholder='Type a message'
          className='bg-customInput w-full h-[20px] min-h-11 max-h-16 rounded-md resize-none text-white border-none p-2 focus-visible:outline-none'
          cols={2}
        ></textarea>
        {message.length === 0 ? (
          <IoMdMic className='search-icon ml-2 cursor-pointer' size={25} />
        ) : (
          <MdSend className='search-icon ml-2 cursor-pointer' size={25} onClick={handleSend} />
        )}
      </div>
    </>
  );
  
};

export default Chat;
