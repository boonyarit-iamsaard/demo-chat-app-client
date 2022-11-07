import { useState } from 'react';

const ChatInput = () => {
  const [message, setMessage] = useState('');

  /**
   * Send message to the server
   * @param {import('react').FormEvent<HTMLFormElement>} e The form event
   */
  const handleSendMessage = e => {
    e.preventDefault();
    console.log({
      username: localStorage.getItem('username'),
      message,
    });
    setMessage('');
  };

  return (
    <div>
      <form className="flex gap-4" onSubmit={handleSendMessage}>
        <input
          aria-label="Message"
          type="text"
          placeholder="Write message"
          className="flex-1 rounded-md border border-gray-300 px-4 py-2"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button className="rounded-md bg-amber-500 px-4 py-2 text-white">
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
